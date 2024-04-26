import { CompetitionUpdInputSchema } from "../../joi/competition.joi";
import { QuestionType } from "../../interfaces/question.interface";
import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";
import { titleCase } from "../../utils/titleCase.util";
import { totalPointVal } from "../../utils/totalPoint.util";
import { formatErrMsg } from "../../utils/format.str.util";

const UpdateCompetitionController = catchAsync(
  async (req: Request, res: Response) => {
    let { id, title, subtitle, price, questionData } = req.body;
    title = titleCase(title);
    const totalPoint = totalPointVal(questionData as QuestionType[]);
    const userId = req.user?.id;

    try {
      // Valid Request Body input
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
      if (competition.createdUserId !== userId) {
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
          title,
          subtitle,
          price,
          totalPoint,
          questions: {
            create: questionData,
          },
        },
      });

      return successResponse({
        message: "Competition updated successfully!",
        data: [],
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

export default UpdateCompetitionController;
