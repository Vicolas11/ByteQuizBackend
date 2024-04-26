import { CompetitionJoinedInputSchema } from "../../joi/competition.joi";
import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";
import { formatErrMsg } from "../../utils/format.str.util";

const JoinedCompetitionController = catchAsync(
  async (req: Request, res: Response) => {
    let { competitionId } = req.body;
    const userId = req.user?.id as string;

    try {
      // Valid Request Body input
      const { error } = CompetitionJoinedInputSchema.validate(req.body);

      if (error) {
        return errorResponse({
          message:
            `${error.details.map((err) => err.message)}` || "Invalid input",
          status: 400,
          res,
        });
      }

      // Check if the competition exist
      const competition = await prisma.competition.findFirst({
        where: { AND: [{ id: competitionId }] },
        include: {
          questions: true,
        },
      });

      if (!competition) {
        return errorResponse({
          message: "Competition not found!",
          status: 404,
          res,
        });
      }

      // Check if it's the loginUser
      if (competition.createdUserId === userId) {
        return errorResponse({
          message: "You don't permission to perform this!",
          status: 401,
          res,
        });
      }

      // Check if the login user has joined the competition before now
      const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
          joinedCompetitions: {
            select: {
              hasJoined: true,
            },
          },
        },
      });

      if (!user) {
        return errorResponse({
          message: "User not found!",
          status: 404,
          res,
        });
      }

      const userJoinedExist = user.joinedCompetitions.find(
        (data) => data.hasJoined
      );

      if (userJoinedExist) {
        return errorResponse({
          message: "You have already joined this competition already!",
          status: 400,
          res,
        });
      }

      // Joined Competitiion
      await prisma.competitionToUser.create({
        data: {
          userId,
          competitionId,
          hasJoined: true,
        },
      });

      return successResponse({
        message: "Joined competition successfully!",
        data: competition,
        res,
      });
    } catch (err: any) {
      return errorResponse({
        message: formatErrMsg(err.message) || err.message || "An error occurred",
        status: 500,
        res,
      });
    }
  }
);

export default JoinedCompetitionController;
