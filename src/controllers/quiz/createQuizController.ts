import { formatErrMsg, formatQuestions } from "../../utils/format.str.util";
import { ConceptType } from "../../interfaces/question.interface";
import { IJWTCustom } from "../../interfaces/jwtcustom.interface";
import catchAsync from "../../utils/catchAsync";
import { errorResponse } from "../../utils/errorResponse";
import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { totalPointVal } from "../../utils/totalPoint.util";
import { quizQuestion } from "../../data/question.data";
import { getRandUniqueInt } from "../../utils/random.gen.utils";
import { prisma } from "../../server";
import { Response } from "express";

const CreateQuizController = catchAsync(async (req: Request, res: Response) => {
  let { concept } = req.body;
  const conpt = concept as ConceptType;
  const user = req.user as IJWTCustom;
  const userId = user.id;

  try {
    const quizQuestions = formatQuestions(quizQuestion[conpt]);
    const genQuestions = getRandUniqueInt().map(
      (value) => quizQuestions[value]
    );
    const overallPoint = totalPointVal(genQuestions);
  
    // Create Quiz
    const quiz = await prisma.quiz.create({
      data: {
        overallPoint,
        questions: {
          create: genQuestions,
        },
        user: {
          connect: { id: userId },
        },
      },
      include: {
        questions: {
          include: {
            options: {
              orderBy: { label: "asc" }
            }
          }
        },
      },
    });

    return successResponse({
      message: "Quiz created successfully!",
      data: quiz,
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

export default CreateQuizController;
