import { CompetitionUpdInputSchema } from "../../joi/competition.joi";
import { QuestionType } from "../../interfaces/question.interface";
import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { totalPointVal } from "../../utils/totalPoint.util";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";
import { formatErrMsg } from "../../utils/format.str.util";

const DoneCompetitionController = catchAsync(
  async (req: Request, res: Response) => {
    let { id, questionData } = req.body;
    const userId = req.user?.id;
    const totalPoint = totalPointVal(questionData as QuestionType[]);

    try {
      // Validate Request Body input
      const { error } = CompetitionUpdInputSchema.validate(req.body);

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
          message: "You don't permission to perform this!",
          status: 401,
          res,
        });
      }

      // Update Competitiion
      await prisma.competition.update({
        where: { id },
        data: {
          totalPoint,
          questions: {
            create: questionData,
          },
        },
      });

      return successResponse({
        message: "Competition completed successfully!",
        data: null,
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

export default DoneCompetitionController;
