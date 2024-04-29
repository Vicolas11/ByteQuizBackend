import { formatErrMsg, formatQuestions } from "../../utils/format.str.util";
import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { totalPointVal } from "../../utils/totalPoint.util";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const SubmitCompetitionController = catchAsync(
  async (req: Request, res: Response) => {
    let { id, questionData } = req.body;
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

      // Check if it's the loginUser
      if (competition.createdUserId === userId) {
        return errorResponse({
          message: "You don't have permission to perform this request!",
          status: 401,
          res,
        });
      }

      // Check if the user has already joined this competition
      const competitionToUser = await prisma.competitionToUser.findUnique({
        where: { userId_competitionId: { userId, competitionId: id } },
      });

      if (!competitionToUser) {
        return errorResponse({
          message: "You haven't joined this competition yet!",
          status: 404,
          res,
        });
      }

      // Check if the user has already submitted
      if (competitionToUser.hasSubmitted) {
        return errorResponse({
          message: "You have submitted already!",
          status: 404,
          res,
        });
      }

      const competeQuestions = formatQuestions(questionData);
      const totalPoint = totalPointVal(competeQuestions);

      // Update the user's total points for the competition
      await prisma.competitionToUser.update({
        where: { userId_competitionId: { userId, competitionId: id } },
        data: { totalPoint, hasSubmitted: true },
      });

      const questions = formatQuestions(questionData);

      // Create questions individually and collect ids
      const createdQuestionIds = [];
      for (const question of questions) {
        const createdQuestion = await prisma.question.create({
          data: { ...question, userId },
        });
        createdQuestionIds.push(createdQuestion.id);
      }

      // Find the CompetitionToUser record for the given user and competition
      const competitionToUser_ = await prisma.competitionToUser.findUnique({
        where: {
          userId_competitionId: { userId, competitionId: id },
        },
      });

      if (!competitionToUser_) {
        throw new Error(`CompetitionToUser not found for this user`);
      }

      // Connect the created questions to the competition
      await prisma.competition.update({
        where: { id },
        data: {
          questions: {
            connect: createdQuestionIds.map((id) => ({ id })),
          },
        },
      });

      return successResponse({
        message: "Competition submitted successfully!",
        data: null,
        res,
        other: null,
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

export default SubmitCompetitionController;
