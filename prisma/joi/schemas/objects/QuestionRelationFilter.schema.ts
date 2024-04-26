// @ts-nocheck
import Joi from 'joi';
import { QuestionWhereInputSchemaObject } from './QuestionWhereInput.schema'

export const QuestionRelationFilterSchemaObject = {
    is: Joi.alternatives().try(Joi.object().keys(QuestionWhereInputSchemaObject)),
  isNot: Joi.alternatives().try(Joi.object().keys(QuestionWhereInputSchemaObject))
}