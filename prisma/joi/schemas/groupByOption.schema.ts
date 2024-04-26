import Joi from 'joi';
import { OptionWhereInputSchemaObject, OptionOrderByWithAggregationInputSchemaObject, OptionScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { OptionScalarFieldEnumSchema } from './enums'

export const OptionGroupBySchema = Joi.object().keys({ where: Joi.object().keys(OptionWhereInputSchemaObject), orderBy: Joi.object().keys(OptionOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(OptionScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(OptionScalarFieldEnumSchema).required()  }).required()