import Joi from 'joi';
import { LogoutTokenWhereUniqueInputSchemaObject, LogoutTokenCreateInputSchemaObject, LogoutTokenUpdateInputSchemaObject } from './objects'

export const LogoutTokenUpsertSchema = Joi.object().keys({ where: Joi.object().keys(LogoutTokenWhereUniqueInputSchemaObject), data: Joi.object().keys(LogoutTokenCreateInputSchemaObject), update: Joi.object().keys(LogoutTokenUpdateInputSchemaObject)  }).required()