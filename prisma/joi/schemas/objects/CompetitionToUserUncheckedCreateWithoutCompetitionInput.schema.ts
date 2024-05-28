// @ts-nocheck
import Joi from 'joi';


export const CompetitionToUserUncheckedCreateWithoutCompetitionInputSchemaObject = {
    id: Joi.string(),
  userId: Joi.string().required(),
  joinedDate: Joi.date(),
  hasJoined: Joi.boolean(),
  hasSubmitted: Joi.boolean(),
  totalPoint: Joi.number()
}