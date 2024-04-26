import { formatErrMsg, formatQuestions } from "../../utils/format.str.util";
import { IJWTCustom } from "../../interfaces/jwtcustom.interface";
import { achievementMedal } from "../../data/achievement.data";
import { Request } from "../../interfaces/request.interface";
import { totalPointVal } from "../../utils/totalPoint.util";
import { errorResponse } from "../../utils/errorResponse";
import { constant } from "../../configs/constant.config";
import catchAsync from "../../utils/catchAsync";
import {
  customSuccessResp,
  successResponse,
} from "../../utils/successResponse";
import { prisma } from "../../server";
import { Response } from "express";

const { medalImgUrl } = constant;

const SubmitQuizController = catchAsync(async (req: Request, res: Response) => {
  let { id, questionData } = req.body;
  const user = req.user as IJWTCustom;
  const userId = user.id;

  try {
    const quizExist = await prisma.quiz.findUnique({
      where: { id },
      include: {
        questions: {
          include: {
            options: {
              orderBy: { label: "asc" },
            },
          },
        },
      },
    });

    if (!quizExist) {
      return errorResponse({
        message: "Quiz not found!",
        status: 404,
        res,
      });
    }

    // Check if it's the loginUser
    if (quizExist.userId !== userId) {
      return errorResponse({
        message: "You don't permission to perform this!",
        status: 401,
        res,
      });
    }

    const quizQuestions = formatQuestions(questionData);
    const totalPoint = totalPointVal(quizQuestions);

    const updateQuiz = await prisma.quiz.update({
      where: { id },
      data: {
        totalPoint,
        questions: {
          create: quizQuestions,
        },
      },
    });

    const loginUser = await prisma.user.findUnique({
      where: { id: userId },
      include: { achievement: true },
    });

    if (!loginUser) {
      return errorResponse({
        message: "Quiz not found!",
        status: 404,
        res,
      });
    }

    if (totalPoint > loginUser.highScore) {
      // Update User High Score
      await prisma.user.update({
        where: { id: loginUser.id },
        data: { highScore: totalPoint },
      });
    }

    const numOfAchievement = loginUser.achievement.length;
    const { overallPoint } = quizExist;
    const percentage = (totalPoint / overallPoint) * 100;

    achievementMedal.map(async (data, i) => {
      if (percentage >= data.percen && numOfAchievement === i) {
        await prisma.achievement.create({
          data: {
            title: data.title,
            medalImg: `${medalImgUrl}${i + 1}.png`,
            userId,
          },
        });

        customSuccessResp(updateQuiz, res, data.msg);
      }
    });

    return successResponse({
      message: "Quiz submitted successfully!",
      data: updateQuiz,
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
});

export default SubmitQuizController;
