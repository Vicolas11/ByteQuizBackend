// @ts-nocheck
import Joi from 'joi';
import { QuestionCreateNestedManyWithoutQuizInputSchemaObject } from './QuestionCreateNestedManyWithoutQuizInput.schema';
import { UserCreateNestedOneWithoutQuizInputSchemaObject } from './UserCreateNestedOneWithoutQuizInput.schema'

export const QuizCreateInputSchemaObject = {
    id: Joi.string(),
  totalPoint: Joi.number(),
  overallPoint: Joi.number(),
  createdAt: Joi.date(),
  hasSubmitted: Joi.boolean(),
  questions: Joi.object().keys(QuestionCreateNestedManyWithoutQuizInputSchemaObject),
  user: Joi.object().keys(UserCreateNestedOneWithoutQuizInputSchemaObject)
}