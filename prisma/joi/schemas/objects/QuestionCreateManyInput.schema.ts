// @ts-nocheck
import Joi from 'joi';


export const QuestionCreateManyInputSchemaObject = {
    id: Joi.string(),
  question: Joi.string().required(),
  score: Joi.number(),
  time: Joi.number(),
  point: Joi.number(),
  isAnswered: Joi.boolean(),
  isCompleted: Joi.boolean(),
  competitionId: Joi.alternatives().try(Joi.string()),
  quizId: Joi.alternatives().try(Joi.string()),
  createdAt: Joi.date(),
  userId: Joi.alternatives().try(Joi.string())
}