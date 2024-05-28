// @ts-nocheck
import Joi from 'joi';
import { QuestionUncheckedCreateNestedManyWithoutQuizInputSchemaObject } from './QuestionUncheckedCreateNestedManyWithoutQuizInput.schema'

export const QuizUncheckedCreateWithoutUserInputSchemaObject = {
    id: Joi.string(),
  totalPoint: Joi.number(),
  overallPoint: Joi.number(),
  createdAt: Joi.date(),
  hasSubmitted: Joi.boolean(),
  questions: Joi.object().keys(QuestionUncheckedCreateNestedManyWithoutQuizInputSchemaObject)
}