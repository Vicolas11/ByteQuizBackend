// @ts-nocheck
import Joi from 'joi';
import { CompetitionCreateWithoutQuestionsInputSchemaObject } from './CompetitionCreateWithoutQuestionsInput.schema';
import { CompetitionUncheckedCreateWithoutQuestionsInputSchemaObject } from './CompetitionUncheckedCreateWithoutQuestionsInput.schema';
import { CompetitionCreateOrConnectWithoutQuestionsInputSchemaObject } from './CompetitionCreateOrConnectWithoutQuestionsInput.schema';
import { CompetitionUpsertWithoutQuestionsInputSchemaObject } from './CompetitionUpsertWithoutQuestionsInput.schema';
import { CompetitionWhereUniqueInputSchemaObject } from './CompetitionWhereUniqueInput.schema';
import { CompetitionUpdateWithoutQuestionsInputSchemaObject } from './CompetitionUpdateWithoutQuestionsInput.schema';
import { CompetitionUncheckedUpdateWithoutQuestionsInputSchemaObject } from './CompetitionUncheckedUpdateWithoutQuestionsInput.schema'

export const CompetitionUpdateOneWithoutQuestionsNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(CompetitionCreateWithoutQuestionsInputSchemaObject),
Joi.object().keys(CompetitionUncheckedCreateWithoutQuestionsInputSchemaObject)),
  connectOrCreate: Joi.object().keys(CompetitionCreateOrConnectWithoutQuestionsInputSchemaObject),
  upsert: Joi.object().keys(CompetitionUpsertWithoutQuestionsInputSchemaObject),
  disconnect: Joi.boolean(),
  delete: Joi.boolean(),
  connect: Joi.object().keys(CompetitionWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(CompetitionUpdateWithoutQuestionsInputSchemaObject),
Joi.object().keys(CompetitionUncheckedUpdateWithoutQuestionsInputSchemaObject))
}