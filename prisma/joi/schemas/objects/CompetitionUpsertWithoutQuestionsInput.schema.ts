// @ts-nocheck
import Joi from 'joi';
import { CompetitionUpdateWithoutQuestionsInputSchemaObject } from './CompetitionUpdateWithoutQuestionsInput.schema';
import { CompetitionUncheckedUpdateWithoutQuestionsInputSchemaObject } from './CompetitionUncheckedUpdateWithoutQuestionsInput.schema';
import { CompetitionCreateWithoutQuestionsInputSchemaObject } from './CompetitionCreateWithoutQuestionsInput.schema';
import { CompetitionUncheckedCreateWithoutQuestionsInputSchemaObject } from './CompetitionUncheckedCreateWithoutQuestionsInput.schema'

export const CompetitionUpsertWithoutQuestionsInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(CompetitionUpdateWithoutQuestionsInputSchemaObject),
Joi.object().keys(CompetitionUncheckedUpdateWithoutQuestionsInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(CompetitionCreateWithoutQuestionsInputSchemaObject),
Joi.object().keys(CompetitionUncheckedCreateWithoutQuestionsInputSchemaObject))
}