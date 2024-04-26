// @ts-nocheck
import Joi from 'joi';


export const CompetitionToUserUncheckedCreateWithoutCompetitionInputSchemaObject = {
    userId: Joi.string().required(),
  joinedDate: Joi.date(),
  hasJoined: Joi.boolean()
}