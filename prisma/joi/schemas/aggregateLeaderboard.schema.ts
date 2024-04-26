import Joi from 'joi';
import { LeaderboardWhereInputSchemaObject, LeaderboardOrderByWithRelationInputSchemaObject, LeaderboardWhereUniqueInputSchemaObject } from './objects'

export const LeaderboardAggregateSchema = Joi.object().keys({ where: Joi.object().keys(LeaderboardWhereInputSchemaObject), orderBy: Joi.object().keys(LeaderboardOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(LeaderboardWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number()  }).required()