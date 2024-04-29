// @ts-nocheck
import Joi from 'joi';


export const CompetitionToUserCreateManyInputSchemaObject = {
    userId: Joi.string().required(),
  competitionId: Joi.string().required(),
  joinedDate: Joi.date(),
  hasJoined: Joi.boolean(),
  hasSubmitted: Joi.boolean(),
  totalPoint: Joi.number()
}