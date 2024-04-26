// @ts-nocheck
import Joi from 'joi';
import { LeaderboardWhereInputSchemaObject } from './LeaderboardWhereInput.schema'

export const LeaderboardListRelationFilterSchemaObject = {
    every: Joi.object().keys(LeaderboardWhereInputSchemaObject),
  some: Joi.object().keys(LeaderboardWhereInputSchemaObject),
  none: Joi.object().keys(LeaderboardWhereInputSchemaObject)
}