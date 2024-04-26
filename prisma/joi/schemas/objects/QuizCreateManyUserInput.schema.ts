// @ts-nocheck
import Joi from 'joi';


export const QuizCreateManyUserInputSchemaObject = {
    id: Joi.string(),
  totalPoint: Joi.number(),
  overallPoint: Joi.number(),
  createdAt: Joi.date()
}