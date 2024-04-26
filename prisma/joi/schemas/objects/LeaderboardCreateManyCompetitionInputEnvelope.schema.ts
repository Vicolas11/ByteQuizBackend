// @ts-nocheck
import Joi from 'joi';
import { LeaderboardCreateManyCompetitionInputSchemaObject } from './LeaderboardCreateManyCompetitionInput.schema'

export const LeaderboardCreateManyCompetitionInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(LeaderboardCreateManyCompetitionInputSchemaObject),
Joi.array().items(Joi.object().keys(LeaderboardCreateManyCompetitionInputSchemaObject))),
  skipDuplicates: Joi.boolean()
}