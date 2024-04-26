import { IJWTCustom } from "../../interfaces/jwtcustom.interface";
import { formatErrMsg } from "../../utils/format.str.util";
import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const GetQuizController = catchAsync(async (req: Request, res: Response) => {
  let { id } = req.params;
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

    return successResponse({
      message: "Fetched quiz successfully!",
      data: quizExist,
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

export default GetQuizController;
