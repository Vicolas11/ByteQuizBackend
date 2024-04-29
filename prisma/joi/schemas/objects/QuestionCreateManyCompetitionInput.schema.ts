// @ts-nocheck
import Joi from 'joi';


export const QuestionCreateManyCompetitionInputSchemaObject = {
    id: Joi.string(),
  question: Joi.string().required(),
  score: Joi.number(),
  time: Joi.number(),
  point: Joi.number(),
  isAnswered: Joi.boolean(),
  isCompleted: Joi.boolean(),
  quizId: Joi.alternatives().try(Joi.string()),
  createdAt: Joi.date(),
  userId: Joi.alternatives().try(Joi.string())
}