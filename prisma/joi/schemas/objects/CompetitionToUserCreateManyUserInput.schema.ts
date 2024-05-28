// @ts-nocheck
import Joi from 'joi';


export const CompetitionToUserCreateManyUserInputSchemaObject = {
    id: Joi.string(),
  competitionId: Joi.string().required(),
  joinedDate: Joi.date(),
  hasJoined: Joi.boolean(),
  hasSubmitted: Joi.boolean(),
  totalPoint: Joi.number()
}