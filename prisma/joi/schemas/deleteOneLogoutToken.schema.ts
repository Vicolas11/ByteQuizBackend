import Joi from 'joi';
import { LogoutTokenWhereUniqueInputSchemaObject } from './objects'

export const LogoutTokenDeleteOneSchema = Joi.object().keys({ where: Joi.object().keys(LogoutTokenWhereUniqueInputSchemaObject)  }).required()