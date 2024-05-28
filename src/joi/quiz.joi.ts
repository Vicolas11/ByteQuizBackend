import { QuestionUpdSchema } from "./competition.joi";
import Joi from "joi";

export const QuizInputSchema = Joi.object({
  concept: Joi.string()
    .valid(
      "arrays",
      "loops",
      "functions",
      "variables",
      "classes",
      "general",
      "data types",
      "conditional statements"
    )
    .required(),
});

export const QuizIdParamSchema = Joi.object({
  id: Joi.string().guid({ version: "uuidv4" }).required(),
});

export const QuizQuerySchema = Joi.object({
  currentPage: Joi.number(),
  perPage: Joi.number(),
});

export const QuizSubmitInputSchema = Joi.object({
  id: Joi.string().guid({ version: "uuidv4" }).required(),
  questionData: Joi.array().items(QuestionUpdSchema).required(),
});
