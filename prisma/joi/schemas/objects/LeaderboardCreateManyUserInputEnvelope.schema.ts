// @ts-nocheck
import Joi from 'joi';
import { LeaderboardCreateManyUserInputSchemaObject } from './LeaderboardCreateManyUserInput.schema'

export const LeaderboardCreateManyUserInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(LeaderboardCreateManyUserInputSchemaObject),
Joi.array().items(Joi.object().keys(LeaderboardCreateManyUserInputSchemaObject))),
  skipDuplicates: Joi.boolean()
}