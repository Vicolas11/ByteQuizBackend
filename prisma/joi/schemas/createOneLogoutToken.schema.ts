import Joi from 'joi';
import { LogoutTokenCreateInputSchemaObject } from './objects'

export const LogoutTokenCreateSchema = Joi.object().keys({ data: Joi.object().keys(LogoutTokenCreateInputSchemaObject)  }).required()