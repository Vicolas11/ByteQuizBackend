// @ts-nocheck
import Joi from 'joi';
import { CompetitionCreateManyCreatedByInputSchemaObject } from './CompetitionCreateManyCreatedByInput.schema'

export const CompetitionCreateManyCreatedByInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(CompetitionCreateManyCreatedByInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionCreateManyCreatedByInputSchemaObject)))
}