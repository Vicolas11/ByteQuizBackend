import Joi from 'joi';
import { CompetitionToUserWhereInputSchemaObject, CompetitionToUserOrderByWithAggregationInputSchemaObject, CompetitionToUserScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { CompetitionToUserScalarFieldEnumSchema } from './enums'

export const CompetitionToUserGroupBySchema = Joi.object().keys({ where: Joi.object().keys(CompetitionToUserWhereInputSchemaObject), orderBy: Joi.object().keys(CompetitionToUserOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(CompetitionToUserScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(CompetitionToUserScalarFieldEnumSchema).required()  }).required()