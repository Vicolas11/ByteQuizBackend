// @ts-nocheck
import Joi from 'joi';


export const CompetitionToUserCreateManyCompetitionInputSchemaObject = {
    userId: Joi.string().required(),
  joinedDate: Joi.date(),
  hasJoined: Joi.boolean()
}