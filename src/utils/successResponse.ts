import { SuccessType } from "../interfaces/success.interface";
import { Response } from "express";

export const successResponse = (args: SuccessType) => {
  const { data = null, message, status = 200, res, other = [] } = args;
  return res.status(status).json({
    status: true,
    code: res.statusCode,
    message,
    data,
    other,
  });
};

export const customSuccessResp = (
  updateQuiz: any,
  res: Response,
  msg: string
) =>
  successResponse({
    message: msg,
    data: updateQuiz,
    status: 201,
    res,
    other: {
      hasAchieved: true,
    },
  });
