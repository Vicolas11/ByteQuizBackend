import { formatErrMsg, formatQuestions } from "../../utils/format.str.util";
import { IJWTCustom } from "../../interfaces/jwtcustom.interface";
import { achievementMedal } from "../../data/achievement.data";
import { Request } from "../../interfaces/request.interface";
import { totalPointVal } from "../../utils/totalPoint.util";
import { errorResponse } from "../../utils/errorResponse";
import { constant } from "../../configs/constant.config";
import { NextFunction, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import {
  customSuccessResp,
  successResponse,
} from "../../utils/successResponse";
import { prisma } from "../../server";

const { medalImgUrl } = constant;

const SubmitQuizController = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
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
          message: "You don't have permission to perform this request!",
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
        include: { achievement: { orderBy: { createdAt: "asc" } } },
      });

      if (!loginUser) {
        return errorResponse({
          message: "Quiz not found!",
          status: 404,
          res,
        });
      }

      let updatedUser;
      const hasScoredHigh = totalPoint > loginUser.highScore;

      if (hasScoredHigh) {
        // Update User High Score
        updatedUser = await prisma.user.update({
          where: { id: loginUser.id },
          data: { highScore: totalPoint },
          include: { achievement: true },
        });
      }

      const numOfAchievement = loginUser.achievement.length;
      const { overallPoint } = quizExist;
      const percentage = (totalPoint / overallPoint) * 100;

      // Award user the necessary award
      for (const [i, data] of achievementMedal.entries()) {
        if (percentage >= data.percen && numOfAchievement === i) {
          const achievement = await prisma.achievement.create({
            data: {
              title: data.title,
              medalImg: `${medalImgUrl}${i + 1}.png`,
              userId,
            },
          });

          if (achievement.userId !== userId) {
            return errorResponse({
              status: 403,
              message: "Not your achievement",
              res,
            });
          }

          const achievedUser = await prisma.user.findUnique({
            where: { id: achievement.userId },
            include: { achievement: { orderBy: { createdAt: "asc" } } },
          });

          if (!achievedUser) {
            return errorResponse({
              status: 404,
              message: "Achievement not Found!",
              res,
            });
          }

          return customSuccessResp(
            updateQuiz,
            res,
            data.msg,
            achievedUser.highScore,
            achievedUser
          );
        }
      }

      return successResponse({
        message: "Quiz submitted successfully!",
        data: updateQuiz,
        status: 201,
        res,
        other: {
          hasAchieved: false,
          highScore: hasScoredHigh ? totalPoint : loginUser.highScore,
          achievement: loginUser.achievement,
        },
      });
    } catch (err: any) {
      next(err);
      return errorResponse({
        message:
          formatErrMsg(err.message) || err.message || "An error occurred",
        status: 500,
        res,
      });
    }
  }
);

export default SubmitQuizController;
