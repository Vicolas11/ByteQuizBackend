import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const JoinedCompetitionController = catchAsync(
  async (req: Request, res: Response) => {
    let { id } = req.params;
    const userId = req.user?.id as string;

    try {
      // Check if the competition exist
      const competition = await prisma.competition.findFirst({
        where: { AND: [{ id }] },
        orderBy: { createdAt: "asc" },
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
          message: "You don't have permission to perform this request!",
          status: 401,
          res,
        });
      }

      // Check if the user has already joined this competition
      const existingEntry = await prisma.competitionToUser.findFirst({
        where: { userId, competitionId: id },
      });

      if (existingEntry) {
        return errorResponse({
          message: "You have already joined this competition!",
          status: 400,
          res,
        });
      }

      // Create a new entry in the CompetitionToUser table for the user (Join the competion)
      await prisma.competitionToUser.create({
        data: {
          userId,
          competitionId: id,
          hasJoined: true,
        },
      });

      // Update hasStarted to true so as to avoid modifying Competition if anyone joined
      await prisma.competition.update({
        where: { id: competition.id },
        data: {
          hasStarted: true,
        },
      });

      return successResponse({
        message: "Joined competition successfully!",
        data: competition,
        res,
        other: {
          compete: true,
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

export default JoinedCompetitionController;
