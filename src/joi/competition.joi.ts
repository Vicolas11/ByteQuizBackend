import Joi from "joi";

const optionSchema = Joi.object({
  value: Joi.string().required(),
  label: Joi.string().required(),
  isCorrect: Joi.boolean(),
  isSelected: Joi.boolean().default(false),
});

export const QuestionSchema = Joi.object({
  question: Joi.string().min(3).required(),
  options: Joi.array().items(optionSchema),
  score: Joi.number().default(5),
  time: Joi.number().default(30),
  point: Joi.number().default(0),
  isAnswered: Joi.boolean().default(false),
  isCompleted: Joi.boolean().default(false),
});

export const CompetitionInputSchema = Joi.object({
  title: Joi.string().min(3).required(),
  subtitle: Joi.string().min(3).required(),
  price: Joi.number().required(),
  questionData: Joi.array().items(QuestionSchema),
});

export const CompetitionUpdInputSchema = Joi.object({
  id: Joi.string().guid({ version: "uuidv4" }).required(),
  title: Joi.string().min(3).required(),
  subtitle: Joi.string().min(3).required(),
  price: Joi.number().required(),
  questionData: Joi.array().items(QuestionSchema),
});

export const CompetitionJoinedInputSchema = Joi.object({
  competitionId: Joi.string().guid({ version: "uuidv4" }).required(),
});
