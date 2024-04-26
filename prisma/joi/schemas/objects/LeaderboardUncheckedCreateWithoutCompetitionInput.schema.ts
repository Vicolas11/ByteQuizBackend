// @ts-nocheck
import Joi from 'joi';


export const LeaderboardUncheckedCreateWithoutCompetitionInputSchemaObject = {
    id: Joi.string(),
  point: Joi.number(),
  position: Joi.string().required(),
  performance: Joi.string().required(),
  createdAt: Joi.date(),
  userId: Joi.string().required()
}