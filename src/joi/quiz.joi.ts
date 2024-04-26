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
