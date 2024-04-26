// @ts-nocheck
import Joi from 'joi';
import { OptionWhereInputSchemaObject } from './OptionWhereInput.schema'

export const OptionListRelationFilterSchemaObject = {
    every: Joi.object().keys(OptionWhereInputSchemaObject),
  some: Joi.object().keys(OptionWhereInputSchemaObject),
  none: Joi.object().keys(OptionWhereInputSchemaObject)
}