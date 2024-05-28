import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const GetStatsController = catchAsync(async (_: Request, res: Response) => {
  try {
    const users = await prisma.user.count();
    const competitions = await prisma.competition.count();
    const questions = await prisma.question.count();

    return successResponse({
      message: "Fetched successfully!",
      data: {
        users,
        competitions,
        questions,
      },
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

export default GetStatsController;
