// @ts-nocheck
import Joi from 'joi';
import { QuestionCreateManyCompetitionInputSchemaObject } from './QuestionCreateManyCompetitionInput.schema'

export const QuestionCreateManyCompetitionInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(QuestionCreateManyCompetitionInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionCreateManyCompetitionInputSchemaObject))),
  skipDuplicates: Joi.boolean()
}