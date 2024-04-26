// @ts-nocheck
import Joi from 'joi';


export const CompetitionToUserCreateManyUserInputSchemaObject = {
    competitionId: Joi.string().required(),
  joinedDate: Joi.date(),
  hasJoined: Joi.boolean()
}