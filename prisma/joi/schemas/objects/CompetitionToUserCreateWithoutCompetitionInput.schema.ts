// @ts-nocheck
import Joi from 'joi';
import { UserCreateNestedOneWithoutJoinedCompetitionsInputSchemaObject } from './UserCreateNestedOneWithoutJoinedCompetitionsInput.schema'

export const CompetitionToUserCreateWithoutCompetitionInputSchemaObject = {
    id: Joi.string(),
  joinedDate: Joi.date(),
  hasJoined: Joi.boolean(),
  hasSubmitted: Joi.boolean(),
  totalPoint: Joi.number(),
  user: Joi.object().keys(UserCreateNestedOneWithoutJoinedCompetitionsInputSchemaObject)
}