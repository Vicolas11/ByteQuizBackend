// @ts-nocheck
import Joi from 'joi';


export const CompetitionToUserUncheckedCreateInputSchemaObject = {
    userId: Joi.string().required(),
  competitionId: Joi.string().required(),
  joinedDate: Joi.date(),
  hasJoined: Joi.boolean()
}