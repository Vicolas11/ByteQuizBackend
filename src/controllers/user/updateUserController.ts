import { IJWTCustom } from "../../interfaces/jwtcustom.interface";
import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";

const UpdateUserController = catchAsync(async (req: Request, res: Response) => {
  const { id, username } = req.body;
  const user = req.user as IJWTCustom;
  const userId = user.id;

  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      return errorResponse({
        message: "User not found!",
        status: 404,
        res,
      });
    }

    if (user.id !== userId) {
      return errorResponse({
        message: "You are not unauthorized to perform this!",
        status: 401,
        res,
      });
    }

    const user_ = await prisma.user.findUnique({
      where: { username },
    });

    if (user_) {
      return errorResponse({
        message: "Username already exist!",
        status: 409,
        res,
      });
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: { username },
    });

    const { password: p, id: i, role, ...rest } = updatedUser;

    return successResponse({
      message: "Updated user successfully!",
      data: rest,
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

export default UpdateUserController;
