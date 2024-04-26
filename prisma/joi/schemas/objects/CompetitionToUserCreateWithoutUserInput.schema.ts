// @ts-nocheck
import Joi from 'joi';
import { CompetitionCreateNestedOneWithoutJoinedUsersInputSchemaObject } from './CompetitionCreateNestedOneWithoutJoinedUsersInput.schema'

export const CompetitionToUserCreateWithoutUserInputSchemaObject = {
    joinedDate: Joi.date(),
  hasJoined: Joi.boolean(),
  competition: Joi.object().keys(CompetitionCreateNestedOneWithoutJoinedUsersInputSchemaObject)
}