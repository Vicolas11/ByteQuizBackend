// @ts-nocheck
import Joi from 'joi';
import { CompetitionCreateNestedOneWithoutLeaderboardsInputSchemaObject } from './CompetitionCreateNestedOneWithoutLeaderboardsInput.schema'

export const LeaderboardCreateWithoutUserInputSchemaObject = {
    id: Joi.string(),
  point: Joi.number(),
  position: Joi.string().required(),
  performance: Joi.string().required(),
  createdAt: Joi.date(),
  Competition: Joi.object().keys(CompetitionCreateNestedOneWithoutLeaderboardsInputSchemaObject)
}