// @ts-nocheck
import Joi from 'joi';
import { LogoutTokenWhereInputSchemaObject } from './LogoutTokenWhereInput.schema'

export const LogoutTokenListRelationFilterSchemaObject = {
    every: Joi.object().keys(LogoutTokenWhereInputSchemaObject),
  some: Joi.object().keys(LogoutTokenWhereInputSchemaObject),
  none: Joi.object().keys(LogoutTokenWhereInputSchemaObject)
}