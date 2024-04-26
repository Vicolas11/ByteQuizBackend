// @ts-nocheck
import Joi from 'joi';
import { QuestionUncheckedCreateNestedManyWithoutQuizInputSchemaObject } from './QuestionUncheckedCreateNestedManyWithoutQuizInput.schema'

export const QuizUncheckedCreateInputSchemaObject = {
    id: Joi.string(),
  totalPoint: Joi.number(),
  overallPoint: Joi.number(),
  createdAt: Joi.date(),
  userId: Joi.string().required(),
  questions: Joi.object().keys(QuestionUncheckedCreateNestedManyWithoutQuizInputSchemaObject)
}