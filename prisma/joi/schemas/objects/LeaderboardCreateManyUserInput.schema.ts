// @ts-nocheck
import Joi from 'joi';


export const LeaderboardCreateManyUserInputSchemaObject = {
    id: Joi.string(),
  point: Joi.number(),
  position: Joi.string().required(),
  performance: Joi.string().required(),
  createdAt: Joi.date(),
  competitionId: Joi.alternatives().try(Joi.string())
}