import Joi from 'joi';
import { LeaderboardWhereInputSchemaObject, LeaderboardOrderByWithAggregationInputSchemaObject, LeaderboardScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { LeaderboardScalarFieldEnumSchema } from './enums'

export const LeaderboardGroupBySchema = Joi.object().keys({ where: Joi.object().keys(LeaderboardWhereInputSchemaObject), orderBy: Joi.object().keys(LeaderboardOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(LeaderboardScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(LeaderboardScalarFieldEnumSchema).required()  }).required()