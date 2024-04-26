// @ts-nocheck
import Joi from 'joi';
import { UserCreateNestedOneWithoutJoinedCompetitionsInputSchemaObject } from './UserCreateNestedOneWithoutJoinedCompetitionsInput.schema'

export const CompetitionToUserCreateWithoutCompetitionInputSchemaObject = {
    joinedDate: Joi.date(),
  hasJoined: Joi.boolean(),
  user: Joi.object().keys(UserCreateNestedOneWithoutJoinedCompetitionsInputSchemaObject)
}