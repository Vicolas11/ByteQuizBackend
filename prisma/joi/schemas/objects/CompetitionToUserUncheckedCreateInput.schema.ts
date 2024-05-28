// @ts-nocheck
import Joi from 'joi';


export const CompetitionToUserUncheckedCreateInputSchemaObject = {
    id: Joi.string(),
  userId: Joi.string().required(),
  competitionId: Joi.string().required(),
  joinedDate: Joi.date(),
  hasJoined: Joi.boolean(),
  hasSubmitted: Joi.boolean(),
  totalPoint: Joi.number()
}