import Joi from 'joi';
import { OptionWhereInputSchemaObject, OptionOrderByWithRelationInputSchemaObject, OptionWhereUniqueInputSchemaObject } from './objects';
import { OptionScalarFieldEnumSchema } from './enums'

export const OptionFindFirstSchema = Joi.object().keys({ where: Joi.object().keys(OptionWhereInputSchemaObject), orderBy: Joi.object().keys(OptionOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(OptionWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(OptionScalarFieldEnumSchema) }).required()