import Joi from 'joi';
import { LogoutTokenWhereInputSchemaObject, LogoutTokenOrderByWithRelationInputSchemaObject, LogoutTokenWhereUniqueInputSchemaObject } from './objects'

export const LogoutTokenAggregateSchema = Joi.object().keys({ where: Joi.object().keys(LogoutTokenWhereInputSchemaObject), orderBy: Joi.object().keys(LogoutTokenOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(LogoutTokenWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number()  }).required()