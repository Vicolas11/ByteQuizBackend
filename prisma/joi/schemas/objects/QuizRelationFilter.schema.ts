// @ts-nocheck
import Joi from 'joi';
import { QuizWhereInputSchemaObject } from './QuizWhereInput.schema'

export const QuizRelationFilterSchemaObject = {
    is: Joi.alternatives().try(Joi.object().keys(QuizWhereInputSchemaObject)),
  isNot: Joi.alternatives().try(Joi.object().keys(QuizWhereInputSchemaObject))
}