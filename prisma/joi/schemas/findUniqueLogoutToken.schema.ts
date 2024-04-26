import Joi from 'joi';
import { LogoutTokenWhereUniqueInputSchemaObject } from './objects'

export const LogoutTokenFindUniqueSchema = Joi.object().keys({ where: Joi.object().keys(LogoutTokenWhereUniqueInputSchemaObject) }).required()