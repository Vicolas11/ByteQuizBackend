import Joi from 'joi';
import { CompetitionWhereInputSchemaObject, CompetitionOrderByWithAggregationInputSchemaObject, CompetitionScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { CompetitionScalarFieldEnumSchema } from './enums'

export const CompetitionGroupBySchema = Joi.object().keys({ where: Joi.object().keys(CompetitionWhereInputSchemaObject), orderBy: Joi.object().keys(CompetitionOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(CompetitionScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(CompetitionScalarFieldEnumSchema).required()  }).required()