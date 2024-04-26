import { prisma } from "../../server";
import catchAsync from "../../utils/catchAsync";
import { errorResponse } from "../../utils/errorResponse";
import { successResponse } from "../../utils/successResponse";
import { Response } from "express";
import { Request } from "../../interfaces/request.interface";
import { titleCase } from "../../utils/titleCase.util";
import { IJWTCustom } from "../../interfaces/jwtcustom.interface";
import { randomCoverImg } from "../../utils/random.cover.util";
import { totalPointVal } from "../../utils/totalPoint.util";
import { QuestionType } from "../../interfaces/question.interface";
import { CompetitionInputSchema } from "../../joi/competition.joi";
import { formatErrMsg } from "../../utils/format.str.util";

const CreateCompetitionController = catchAsync(
  async (req: Request, res: Response) => {
    let { title, subtitle, price, questionData } = req.body;
    title = titleCase(title);
    const overallPoint = totalPointVal(questionData as QuestionType[]);
    const imgCover = randomCoverImg();
    const user = req.user as IJWTCustom;
    const userId = user.id;

    try {
      // Valid Request Body input
      const { error } = CompetitionInputSchema.validate(req.body);

      if (error) {
        return errorResponse({
          message:
            `${error.details.map((err) => err.message)}` || "Invalid input",
          status: 400,
          res,
        });
      }

      // Create Competion
      await prisma.competition.create({
        data: {
          title,
          subtitle,
          imgCover,
          price,
          overallPoint,
          questions: {
            create: questionData,
          },
          createdBy: {
            connect: { id: userId },
          },
        },
      });

      return successResponse({
        message: "Competition created successfully!",
        data: [],
        status: 201,
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

export default CreateCompetitionController;
