import { formatErrMsg, formatQuestions } from "../../utils/format.str.util";
import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { totalPointVal } from "../../utils/totalPoint.util";
import { errorResponse } from "../../utils/errorResponse";
import { titleCase } from "../../utils/titleCase.util";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const UpdateCompetitionController = catchAsync(
  async (req: Request, res: Response) => {
    let { id, title, subtitle, price, questionData } = req.body;
    title = titleCase(title);
    const userId = req.user?.id;

    try {
      // Check if the Competition Title exist
      const existCompete = await prisma.competition.findFirst({
        where: { title },
      });

      if (existCompete) {
        return errorResponse({
          message: "Competition with this title already exist",
          status: 409,
          res,
        });
      }

      // Check if the Competition exist
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
          message: "You don't have permission to perform this request!",
          status: 401,
          res,
        });
      }

      if (competition.hasStarted) {
        return errorResponse({
          message: "Can't update this Competition again!",
          status: 401,
          res,
        });
      }

      const competeQuestions = formatQuestions(questionData);
      const overallPoint = totalPointVal(competeQuestions);

      // Update Competitiion
      await prisma.competition.update({
        where: { id },
        data: {
          title,
          subtitle,
          price,
          overallPoint,
        },
      });

      // Update Each related Question and Option
      for (const questData of questionData) {
        const { id: questionId, options, ...question } = questData;

        await prisma.question.update({
          where: { id: questionId },
          data: question,
        });

        // Iterate over options and create/update each option
        for (const optionData of options) {
          const { id: optionId, ...option } = optionData;

          // Update the option
          await prisma.option.update({
            where: { id: optionId },
            data: option,
          });
        }
      }

      return successResponse({
        message: "Competition updated successfully!",
        data: null,
        res,
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

export default UpdateCompetitionController;
