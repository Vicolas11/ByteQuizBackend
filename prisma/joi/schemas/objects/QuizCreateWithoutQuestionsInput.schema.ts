// @ts-nocheck
import Joi from 'joi';
import { UserCreateNestedOneWithoutQuizInputSchemaObject } from './UserCreateNestedOneWithoutQuizInput.schema'

export const QuizCreateWithoutQuestionsInputSchemaObject = {
    id: Joi.string(),
  totalPoint: Joi.number(),
  overallPoint: Joi.number(),
  createdAt: Joi.date(),
  user: Joi.object().keys(UserCreateNestedOneWithoutQuizInputSchemaObject)
}