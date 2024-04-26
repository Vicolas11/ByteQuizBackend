import Joi from 'joi';
import { OptionWhereInputSchemaObject, OptionOrderByWithRelationInputSchemaObject, OptionWhereUniqueInputSchemaObject } from './objects'

export const OptionAggregateSchema = Joi.object().keys({ where: Joi.object().keys(OptionWhereInputSchemaObject), orderBy: Joi.object().keys(OptionOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(OptionWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number()  }).required()