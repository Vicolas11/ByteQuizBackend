// @ts-nocheck
import Joi from 'joi';
import { QuestionCreateManyQuizInputSchemaObject } from './QuestionCreateManyQuizInput.schema'

export const QuestionCreateManyQuizInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(QuestionCreateManyQuizInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionCreateManyQuizInputSchemaObject))),
  skipDuplicates: Joi.boolean()
}