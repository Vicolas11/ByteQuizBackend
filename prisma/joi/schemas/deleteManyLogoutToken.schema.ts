import Joi from 'joi';
import { LogoutTokenWhereInputSchemaObject } from './objects'

export const LogoutTokenDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(LogoutTokenWhereInputSchemaObject)  }).required()