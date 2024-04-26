import Joi from 'joi';
import { LogoutTokenUpdateInputSchemaObject, LogoutTokenWhereUniqueInputSchemaObject } from './objects'

export const LogoutTokenUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(LogoutTokenUpdateInputSchemaObject), where: Joi.object().keys(LogoutTokenWhereUniqueInputSchemaObject)  }).required()