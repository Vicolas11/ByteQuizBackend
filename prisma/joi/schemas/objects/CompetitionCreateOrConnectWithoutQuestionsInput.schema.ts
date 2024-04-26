// @ts-nocheck
import Joi from 'joi';
import { CompetitionWhereUniqueInputSchemaObject } from './CompetitionWhereUniqueInput.schema';
import { CompetitionCreateWithoutQuestionsInputSchemaObject } from './CompetitionCreateWithoutQuestionsInput.schema';
import { CompetitionUncheckedCreateWithoutQuestionsInputSchemaObject } from './CompetitionUncheckedCreateWithoutQuestionsInput.schema'

export const CompetitionCreateOrConnectWithoutQuestionsInputSchemaObject = {
    where: Joi.object().keys(CompetitionWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(CompetitionCreateWithoutQuestionsInputSchemaObject),
Joi.object().keys(CompetitionUncheckedCreateWithoutQuestionsInputSchemaObject))
}