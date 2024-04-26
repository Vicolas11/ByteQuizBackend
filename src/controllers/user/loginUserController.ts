import { signAccessJWToken, signRefreshJWToken } from "../../utils/jwt.util";
import { successResponse } from "../../utils/successResponse";
import { formatErrMsg } from "../../utils/format.str.util";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { Request, Response } from "express";
import { prisma } from "../../server";
import bcrypt from "bcryptjs";

const LoginUserController = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await prisma.user.findFirst({ where: { OR: [{ email }] } });

    if (!user) {
      return errorResponse({
        message: "User doesn't exists!",
        status: 404,
        res,
      });
    }

    // Verify the password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return errorResponse({
        message: "Invalid password!",
        status: 403,
        res,
      });
    }
    // Generate Access and Refreshed Token
    const accessToken = await signAccessJWToken({
      role: user.role,
      id: user.id
    });

    const refreshToken = await signRefreshJWToken({
      role: user.role,
      id: user.id
    });

    const { password: p, id, role, ...rest } = user;

    return successResponse({
      message: "Login successfully",
      data: {
        ...rest,
        accessToken,
        refreshToken,
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

export default LoginUserController;
