// @ts-nocheck
import Joi from 'joi';
import { QuestionWhereInputSchemaObject } from './QuestionWhereInput.schema'

export const QuestionListRelationFilterSchemaObject = {
    every: Joi.object().keys(QuestionWhereInputSchemaObject),
  some: Joi.object().keys(QuestionWhereInputSchemaObject),
  none: Joi.object().keys(QuestionWhereInputSchemaObject)
}