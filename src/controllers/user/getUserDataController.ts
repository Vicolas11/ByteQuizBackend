import { IJWTCustom } from "../../interfaces/jwtcustom.interface";
import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const GetUserDataController = catchAsync(
  async (req: Request, res: Response) => {
    const user = req.user as IJWTCustom;
    const userId = user.id;

    try {
      // Check if the user exists
      const user = await prisma.user.findUnique({
        where: { id: userId },
        include: { achievement: { select: { title: true, medalImg: true } } },
      });

      if (!user) {
        return errorResponse({
          message: "User doesn't exists!",
          status: 404,
          res,
        });
      }

      const { password: p, id, role, ...rest } = user;

      return successResponse({
        message: "Fetched user data successfully!",
        data: {
          ...rest,
        },
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

export default GetUserDataController;
