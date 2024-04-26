import Joi from 'joi';
import { LogoutTokenUpdateManyMutationInputSchemaObject, LogoutTokenWhereInputSchemaObject } from './objects'

export const LogoutTokenUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(LogoutTokenUpdateManyMutationInputSchemaObject), where: Joi.object().keys(LogoutTokenWhereInputSchemaObject)  }).required()