import Joi from "joi";

const optionSchema = Joi.object({
  value: Joi.string().required(),
  label: Joi.string().required(),
  isCorrect: Joi.boolean().required(),
  isSelected: Joi.boolean().required(),
});

const optionUpdSchema = optionSchema.keys({
  id: Joi.string().guid({ version: "uuidv4" }),
});

export const QuestionSchema = Joi.object({
  question: Joi.string().required(),
  score: Joi.number().integer().required(),
  time: Joi.number().integer().required(),
  point: Joi.number().integer().required(),
  isAnswered: Joi.boolean().required(),
  isCompleted: Joi.boolean().required(),
  options: Joi.array().items(optionSchema).required(),
});

export const QuestionUpdSchema = QuestionSchema.keys({
  id: Joi.string().guid({ version: "uuidv4" }),
}).keys({
  options: Joi.array().items(optionUpdSchema).required(),
});

export const CompetitionInputSchema = Joi.object({
  title: Joi.string().min(3).required(),
  subtitle: Joi.string().min(3).required(),
  price: Joi.number().required(),
  questionData: Joi.array().items(QuestionSchema),
});

export const CompetitionQuerySchema = Joi.object({
  currentPage: Joi.number(),
  perPage: Joi.number(),
});

export const CompetitionUpdInputSchema = Joi.object({
  id: Joi.string().guid({ version: "uuidv4" }).required(),
  title: Joi.string().min(3).required(),
  subtitle: Joi.string().min(3).required(),
  price: Joi.number().required(),
  questionData: Joi.array().items(QuestionUpdSchema).required(),
});

export const CompetitionParamsSchema = Joi.object({
  id: Joi.string().guid({ version: "uuidv4" }).required(),
});

export const CompetitionSubInpSchema = Joi.object({
  id: Joi.string().guid({ version: "uuidv4" }).required(),
  questionData: Joi.array().items(QuestionSchema).required(),
});

export const CompetitionBoardSchema = Joi.object({
  id: Joi.string().guid({ version: "uuidv4" }).required(),
  currentPage: Joi.number(),
  perPage: Joi.number(),
});
