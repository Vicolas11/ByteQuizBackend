import ChangePasswordController from "../controllers/user/changePasswordController";
import GetUserDataController from "../controllers/user/getUserDataController";
import UpdateUserController from "../controllers/user/updateUserController";
import LogoutUserController from "../controllers/user/logoutUserController";
import LoginUserController from "../controllers/user/loginUserController";
import GetStatsController from "../controllers/user/getStatsController";
import RegisterController from "../controllers/user/registerController";
import { authenticateToken } from "../middlewares/authenticateToken";
import { validateRequest } from "../middlewares/validateRequest";
import {
  AccountInputSchema,
  ChangeInputSchema,
  RegisterInputSchema,
} from "../joi/register.joi";
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

userRouters.get("/stats", GetStatsController);

userRouters.use(authenticateToken);

userRouters.get("/me", GetUserDataController);

userRouters.post(
  "/changepassword",
  validateRequest(ChangeInputSchema),
  ChangePasswordController
);

userRouters.patch(
  "/account",
  validateRequest(AccountInputSchema),
  UpdateUserController
);

userRouters.post("/logout", LogoutUserController);

export default userRouters;
