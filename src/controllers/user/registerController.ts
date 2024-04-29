import { successResponse } from "../../utils/successResponse";
import { errorResponse } from "../../utils/errorResponse";
import catchAsync from "../../utils/catchAsync";
import { Request, Response } from "express";
import { prisma } from "../../server";
import bcrypt from "bcryptjs";
import { randomAvatar } from "../../utils/random.avatar.util";
import { RegisterInputSchema } from "../../joi/register.joi";
import { formatErrMsg } from "../../utils/format.str.util";

const RegisterController = catchAsync(async (req: Request, res: Response) => {
  const { username, email, password, gender } = req.body ;

  try {
    // Valid Request Body input
    const { error } = RegisterInputSchema.validate(req.body);

    if (error) {
      return errorResponse({
        message: `${error.details.map((err) => err.message)}` || "Invalid input",
        status: 400,
        res,
      });
    }

    // Check if user with the same email already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return errorResponse({
        message: "User already exists",
        status: 409,
        res,
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        gender,
        password: hashedPassword,
        avatar: randomAvatar(gender === "Male"),
      },
    });

    // Remove the password field for security reasons
    Reflect.deleteProperty(newUser, "password");

    return successResponse({
      message: "Signed up successfully!",
      data: null,
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

export default RegisterController;
