// @ts-nocheck
import Joi from 'joi';
import { CompetitionToUserCreateManyUserInputSchemaObject } from './CompetitionToUserCreateManyUserInput.schema'

export const CompetitionToUserCreateManyUserInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(CompetitionToUserCreateManyUserInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionToUserCreateManyUserInputSchemaObject))),
  skipDuplicates: Joi.boolean()
}