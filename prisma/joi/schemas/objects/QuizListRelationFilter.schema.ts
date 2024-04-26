// @ts-nocheck
import Joi from 'joi';
import { QuizWhereInputSchemaObject } from './QuizWhereInput.schema'

export const QuizListRelationFilterSchemaObject = {
    every: Joi.object().keys(QuizWhereInputSchemaObject),
  some: Joi.object().keys(QuizWhereInputSchemaObject),
  none: Joi.object().keys(QuizWhereInputSchemaObject)
}