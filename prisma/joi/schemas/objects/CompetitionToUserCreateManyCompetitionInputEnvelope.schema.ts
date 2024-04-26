// @ts-nocheck
import Joi from 'joi';
import { CompetitionToUserCreateManyCompetitionInputSchemaObject } from './CompetitionToUserCreateManyCompetitionInput.schema'

export const CompetitionToUserCreateManyCompetitionInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(CompetitionToUserCreateManyCompetitionInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionToUserCreateManyCompetitionInputSchemaObject))),
  skipDuplicates: Joi.boolean()
}