import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import { getRemark } from "../../utils/remarks.util";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const GetUsersQuizController = catchAsync(
  async (req: Request, res: Response) => {
    const userId = req.user?.id as string;
    let { currentPage, perPage } = req.query;
    const pageSize = +(perPage as string) || 10;
    const pgNum = +(currentPage as string) || 1;
    const skip = (pgNum - 1) * pageSize;
    const totalCount =
      (
        await prisma.quiz.findMany({
          where: { userId },
        })
      ).length || 0;
    const totalPages = Math.ceil(totalCount / pageSize);

    try {
      const quiz = await prisma.quiz.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        include: {
          user: {
            select: {
              username: true,
              email: true,
            },
          },
        },
        take: pageSize,
        skip,
      });

      // Get Users Quiz
      const getUsersQuiz = quiz.map((data) => {
        const qix = data.id.split("-")[0];
        const overallPoint = data.overallPoint;
        const totalPoint = data.totalPoint;
        const percentage = (totalPoint / overallPoint) * 100;
        const remark = getRemark(percentage);

        return {
          id: data.id,
          title: `Quiz-${qix}`,
          createdAt: data.createdAt,
          point: data.totalPoint,
          overallPoint: data.overallPoint,
          authorUsername: data.user.username,
          authorEmail: data.user.email,
          remark: remark,
        };
      });

      return successResponse({
        message: "Fetched successfully",
        data: getUsersQuiz,
        res,
        other: {
          totalCount,
          totalPages,
        },
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

export default GetUsersQuizController;
