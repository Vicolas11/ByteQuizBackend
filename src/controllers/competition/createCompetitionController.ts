import { formatErrMsg, formatQuestions } from "../../utils/format.str.util";
import { CompetitionInputSchema } from "../../joi/competition.joi";
import { IJWTCustom } from "../../interfaces/jwtcustom.interface";
import { randomCoverImg } from "../../utils/random.cover.util";
import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { totalPointVal } from "../../utils/totalPoint.util";
import { errorResponse } from "../../utils/errorResponse";
import { titleCase } from "../../utils/titleCase.util";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const CreateCompetitionController = catchAsync(
  async (req: Request, res: Response) => {
    let { title, subtitle, price, questionData } = req.body;
    title = titleCase(title);
    const imgCover = randomCoverImg();
    const user = req.user as IJWTCustom;
    const userId = user.id;

    try {
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

      const competitionQuestions = formatQuestions(questionData);
      const overallPoint = totalPointVal(competitionQuestions);

      // Create Competion
      await prisma.competition.create({
        data: {
          title,
          subtitle,
          imgCover,
          price,
          overallPoint,
          questions: {
            create: competitionQuestions,
          },
          createdBy: {
            connect: { id: userId },
          },
        },
      });

      return successResponse({
        message: "Competition created successfully!",
        data: null,
        status: 201,
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

export default CreateCompetitionController;
