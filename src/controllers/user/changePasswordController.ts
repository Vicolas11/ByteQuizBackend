import { IJWTCustom } from "../../interfaces/jwtcustom.interface";
import { successResponse } from "../../utils/successResponse";
import { Request } from "../../interfaces/request.interface";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { prisma } from "../../server";
import { Response } from "express";
import bcrypt from "bcryptjs";

const ChangePasswordController = catchAsync(
  async (req: Request, res: Response) => {
    const { id, oldpassword, newpassword } = req.body;
    const user = req.user as IJWTCustom;
    const userId = user.id;

    try {
      // Check if user with the same email already exists
      const existUser = await prisma.user.findFirst({ where: { id } });

      if (!existUser) {
        return errorResponse({
          message: "User not found!",
          status: 404,
          res,
        });
      }

      if (existUser.id !== userId) {
        return errorResponse({
          message: "You are not unauthorized to perform this!",
          status: 401,
          res,
        });
      }

      // Verify the password
      const passwordMatch = await bcrypt.compare(
        oldpassword,
        existUser.password
      );

      if (!passwordMatch) {
        return errorResponse({
          message: "Invalid password!",
          status: 403,
          res,
        });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(newpassword, 10);

      // Reset Password
      await prisma.user.update({
        where: { id: existUser.id },
        data: {
          password: hashedPassword,
        },
      });

      return successResponse({
        message: "Password changed successfully",
        data: null,
        res,
      });
    } catch (err: any) {
      const message =
        formatErrMsg(err.message) || err.message || "An error occurred";

      return errorResponse({
        message,
        status: err.status || 500,
        res,
      });
    }
  }
);

export default ChangePasswordController;
