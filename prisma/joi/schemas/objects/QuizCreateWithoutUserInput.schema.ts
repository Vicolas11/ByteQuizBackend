// @ts-nocheck
import Joi from 'joi';
import { QuestionCreateNestedManyWithoutQuizInputSchemaObject } from './QuestionCreateNestedManyWithoutQuizInput.schema'

export const QuizCreateWithoutUserInputSchemaObject = {
    id: Joi.string(),
  totalPoint: Joi.number(),
  overallPoint: Joi.number(),
  createdAt: Joi.date(),
  questions: Joi.object().keys(QuestionCreateNestedManyWithoutQuizInputSchemaObject)
}