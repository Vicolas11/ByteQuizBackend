// @ts-nocheck
import Joi from 'joi';
import { QuestionCreateManyUserInputSchemaObject } from './QuestionCreateManyUserInput.schema'

export const QuestionCreateManyUserInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(QuestionCreateManyUserInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionCreateManyUserInputSchemaObject)))
}