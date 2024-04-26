// @ts-nocheck
import Joi from 'joi';
import { UserCreateNestedOneWithoutJoinedCompetitionsInputSchemaObject } from './UserCreateNestedOneWithoutJoinedCompetitionsInput.schema';
import { CompetitionCreateNestedOneWithoutJoinedUsersInputSchemaObject } from './CompetitionCreateNestedOneWithoutJoinedUsersInput.schema'

export const CompetitionToUserCreateInputSchemaObject = {
    joinedDate: Joi.date(),
  hasJoined: Joi.boolean(),
  user: Joi.object().keys(UserCreateNestedOneWithoutJoinedCompetitionsInputSchemaObject),
  competition: Joi.object().keys(CompetitionCreateNestedOneWithoutJoinedUsersInputSchemaObject)
}