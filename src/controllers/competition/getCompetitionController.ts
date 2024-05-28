import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const GetCompetitionController = catchAsync(
  async (req: Request, res: Response) => {
    let { id } = req.params;
    const userId = req.user?.id as string;

    try {
      const competition = await prisma.competition.findFirst({
        where: { AND: [{ id }] },
        orderBy: { createdAt: "asc" },
        include: {
          questions: {
            orderBy: { createdAt: "asc" },
            where: { isCompleted: false },
            select: {
              id: true,
              question: true,
              score: true,
              time: true,
              point: true,
              isAnswered: true,
              isCompleted: true,
              options: {
                orderBy: { label: "asc" },
                select: {
                  id: true,
                  value: true,
                  label: true,
                  isCorrect: true,
                  isSelected: true,
                },
              },
            },
          },
        },
      });

      if (!competition) {
        return errorResponse({
          message: "Competition not found!",
          status: 404,
          res,
        });
      }

      // Find the CompetitionToUser record for the given user and competition
      const competitionToUser = await prisma.competitionToUser.findUnique({
        where: {
          userId_competitionId: { userId, competitionId: id },
        },
      });

      return successResponse({
        message: "Fetch successfully",
        data: competition,
        res,
        other: {
          hasJoined: competitionToUser ? true : false,
          hasSubmitted: !competitionToUser
            ? false
            : competitionToUser.hasSubmitted,
        },
      });
    } catch (err: any) {
      return errorResponse({
        message:
          formatErrMsg(err.message) || err.message || "An error occurred",
        status: 500,
        res,
      });
    }
  }
);

export default GetCompetitionController;
