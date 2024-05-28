// @ts-nocheck
import Joi from 'joi';
import { QuizCreateManyUserInputSchemaObject } from './QuizCreateManyUserInput.schema'

export const QuizCreateManyUserInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(QuizCreateManyUserInputSchemaObject),
Joi.array().items(Joi.object().keys(QuizCreateManyUserInputSchemaObject)))
}