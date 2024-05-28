// @ts-nocheck
import Joi from 'joi';
import { CompetitionCreateNestedOneWithoutJoinedUsersInputSchemaObject } from './CompetitionCreateNestedOneWithoutJoinedUsersInput.schema'

export const CompetitionToUserCreateWithoutUserInputSchemaObject = {
    id: Joi.string(),
  joinedDate: Joi.date(),
  hasJoined: Joi.boolean(),
  hasSubmitted: Joi.boolean(),
  totalPoint: Joi.number(),
  competition: Joi.object().keys(CompetitionCreateNestedOneWithoutJoinedUsersInputSchemaObject)
}