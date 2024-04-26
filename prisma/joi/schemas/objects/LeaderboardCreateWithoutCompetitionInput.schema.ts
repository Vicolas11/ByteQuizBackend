// @ts-nocheck
import Joi from 'joi';
import { UserCreateNestedOneWithoutLeaderboardInputSchemaObject } from './UserCreateNestedOneWithoutLeaderboardInput.schema'

export const LeaderboardCreateWithoutCompetitionInputSchemaObject = {
    id: Joi.string(),
  point: Joi.number(),
  position: Joi.string().required(),
  performance: Joi.string().required(),
  createdAt: Joi.date(),
  user: Joi.object().keys(UserCreateNestedOneWithoutLeaderboardInputSchemaObject)
}