import CreateQuizController from "../controllers/quiz/createQuizController";
import { Router } from "express";
import { validateRequest } from "../middlewares/validateRequest";
import { QuizInputSchema } from "../joi/quiz.joi";
import { authenticateToken } from "../middlewares/authenticateToken";

const quizRouters = Router();

quizRouters.use(authenticateToken);

quizRouters.post(
  "/quiz",
  validateRequest(QuizInputSchema),
  CreateQuizController
);

export default quizRouters;