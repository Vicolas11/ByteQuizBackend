import GetUsersQuizController from "../controllers/quiz/getUsersQuizController";
import CreateQuizController from "../controllers/quiz/createQuizController";
import SubmitQuizController from "../controllers/quiz/submitQuizController";
import GetQuizController from "../controllers/quiz/getQuizController";
import { authenticateToken } from "../middlewares/authenticateToken";
import { validateRequest } from "../middlewares/validateRequest";
import { Router } from "express";
import {
  QuizIdParamSchema,
  QuizInputSchema,
  QuizQuerySchema,
  QuizSubmitInputSchema,
} from "../joi/quiz.joi";

const quizRouters = Router();

quizRouters.use(authenticateToken);

quizRouters.post(
  "/quiz",
  validateRequest(QuizInputSchema),
  CreateQuizController
);

quizRouters.get(
  "/quiz",
  validateRequest(QuizQuerySchema, "query"),
  GetUsersQuizController
);

quizRouters.get(
  "/quiz/:id",
  validateRequest(QuizIdParamSchema, "params"),
  GetQuizController
);

quizRouters.post(
  "/quiz/submit",
  validateRequest(QuizSubmitInputSchema),
  SubmitQuizController
);

export default quizRouters;
