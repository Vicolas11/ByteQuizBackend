// @ts-nocheck
import Joi from 'joi';
import { OptionUncheckedCreateNestedManyWithoutQuestionInputSchemaObject } from './OptionUncheckedCreateNestedManyWithoutQuestionInput.schema'

export const QuestionUncheckedCreateWithoutQuizInputSchemaObject = {
    id: Joi.string(),
  question: Joi.string().required(),
  score: Joi.number(),
  time: Joi.number(),
  point: Joi.number(),
  isAnswered: Joi.boolean(),
  isCompleted: Joi.boolean(),
  competitionId: Joi.alternatives().try(Joi.string()),
  createdAt: Joi.date(),
  userId: Joi.alternatives().try(Joi.string()),
  options: Joi.object().keys(OptionUncheckedCreateNestedManyWithoutQuestionInputSchemaObject)
}