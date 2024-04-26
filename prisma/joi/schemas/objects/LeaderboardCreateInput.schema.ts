// @ts-nocheck
import Joi from 'joi';
import { UserCreateNestedOneWithoutLeaderboardInputSchemaObject } from './UserCreateNestedOneWithoutLeaderboardInput.schema';
import { CompetitionCreateNestedOneWithoutLeaderboardsInputSchemaObject } from './CompetitionCreateNestedOneWithoutLeaderboardsInput.schema'

export const LeaderboardCreateInputSchemaObject = {
    id: Joi.string(),
  point: Joi.number(),
  position: Joi.string().required(),
  performance: Joi.string().required(),
  createdAt: Joi.date(),
  user: Joi.object().keys(UserCreateNestedOneWithoutLeaderboardInputSchemaObject),
  Competition: Joi.object().keys(CompetitionCreateNestedOneWithoutLeaderboardsInputSchemaObject)
}