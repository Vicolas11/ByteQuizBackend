import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const FeedbackController = catchAsync(async (req: Request, res: Response) => {
  let { id } = req.params;
  const userId = req.user?.id as string;

  try {
    // Check if the competition exist
    const competition = await prisma.competition.findFirst({
      where: { AND: [{ id }] },
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

    const test = await prisma.competitionToUser.findMany({ where: { userId } });

    // Get User's Feedback for a Particular Competition
    const feedback = await prisma.competitionToUser.findFirst({
      where: { AND: [{ userId  }, { competitionId: id }] },
      include: {
        competition: {
          include: {
            questions: {
              where: { AND: [{ isCompleted: true }, { userId }]  },
              include: { options: true },
              orderBy: { createdAt: "asc" },
            },
          },
        },
      },
    });

    const feedback_ = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        joinedCompetitions: {
          select: {
            competition: {
              select: {
                questions: {
                  where: { isCompleted: true },
                  include: { options: true },
                  orderBy: { createdAt: "asc" },
                },
              },
            },
          },
        },
      },
    });

    if (!feedback_ || !feedback) {
      return errorResponse({
        message: "No feedback!",
        status: 404,
        res,
      });
    }

    return successResponse({
      message: "Fetched feedback successfully!",
      data: feedback.competition.questions,
      res,
      other: {
        totalPoint: feedback.totalPoint,
      },
    });
  } catch (err: any) {
    return errorResponse({
      message: formatErrMsg(err.message) || err.message || "An error occurred",
      status: 500,
      res,
    });
  }
});

export default FeedbackController;
