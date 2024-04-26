import LoginUserController from "../controllers/user/loginUserController";
import RegisterController from "../controllers/user/registerController";
import { validateRequest } from "../middlewares/validateRequest";
import { authenticateToken } from "../middlewares/authenticateToken";
import LogoutUserController from "../controllers/user/logoutUserController";
import { RegisterInputSchema } from "../joi/register.joi";
import { LoginInputSchema } from "../joi/login.joi";
import { Router } from "express";

const userRouters = Router();

userRouters.post(
  "/login",
  validateRequest(LoginInputSchema),
  LoginUserController
);

userRouters.post(
  "/register",
  validateRequest(RegisterInputSchema),
  RegisterController
);

userRouters.post("/logout", authenticateToken, LogoutUserController);

export default userRouters;
