// @ts-nocheck
import Joi from 'joi';


export const QuizCreateManyInputSchemaObject = {
    id: Joi.string(),
  totalPoint: Joi.number(),
  overallPoint: Joi.number(),
  createdAt: Joi.date(),
  userId: Joi.string().required(),
  hasSubmitted: Joi.boolean()
}