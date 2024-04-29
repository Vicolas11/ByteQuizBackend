import { QuestionSchema } from "./competition.joi";
import Joi from "joi";

export const QuizInputSchema = Joi.object({
  concept: Joi.string()
    .valid(
      "arrays",
      "loops",
      "functions",
      "variables",
      "classes",
      "methods",
      "inheritance",
      "encapsulation",
      "polymorphism"
    )
    .required(),
});

export const QuizIdParamSchema = Joi.object({
  id: Joi.string().guid({ version: "uuidv4" }).required(),
});

export const QuizSubmitInputSchema = Joi.object({
  id: Joi.string().guid({ version: "uuidv4" }).required(),
  questionData: Joi.array().items(QuestionSchema).required(),
});
