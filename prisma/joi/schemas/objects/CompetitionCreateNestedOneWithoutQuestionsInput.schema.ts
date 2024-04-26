// @ts-nocheck
import Joi from 'joi';
import { CompetitionCreateWithoutQuestionsInputSchemaObject } from './CompetitionCreateWithoutQuestionsInput.schema';
import { CompetitionUncheckedCreateWithoutQuestionsInputSchemaObject } from './CompetitionUncheckedCreateWithoutQuestionsInput.schema';
import { CompetitionCreateOrConnectWithoutQuestionsInputSchemaObject } from './CompetitionCreateOrConnectWithoutQuestionsInput.schema';
import { CompetitionWhereUniqueInputSchemaObject } from './CompetitionWhereUniqueInput.schema'

export const CompetitionCreateNestedOneWithoutQuestionsInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(CompetitionCreateWithoutQuestionsInputSchemaObject),
Joi.object().keys(CompetitionUncheckedCreateWithoutQuestionsInputSchemaObject)),
  connectOrCreate: Joi.object().keys(CompetitionCreateOrConnectWithoutQuestionsInputSchemaObject),
  connect: Joi.object().keys(CompetitionWhereUniqueInputSchemaObject)
}