import Joi from 'joi';
import { LogoutTokenWhereInputSchemaObject, LogoutTokenOrderByWithAggregationInputSchemaObject, LogoutTokenScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { LogoutTokenScalarFieldEnumSchema } from './enums'

export const LogoutTokenGroupBySchema = Joi.object().keys({ where: Joi.object().keys(LogoutTokenWhereInputSchemaObject), orderBy: Joi.object().keys(LogoutTokenOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(LogoutTokenScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(LogoutTokenScalarFieldEnumSchema).required()  }).required()