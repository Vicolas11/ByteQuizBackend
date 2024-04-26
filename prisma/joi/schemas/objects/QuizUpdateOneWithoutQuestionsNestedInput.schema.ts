// @ts-nocheck
import Joi from 'joi';
import { QuizCreateWithoutQuestionsInputSchemaObject } from './QuizCreateWithoutQuestionsInput.schema';
import { QuizUncheckedCreateWithoutQuestionsInputSchemaObject } from './QuizUncheckedCreateWithoutQuestionsInput.schema';
import { QuizCreateOrConnectWithoutQuestionsInputSchemaObject } from './QuizCreateOrConnectWithoutQuestionsInput.schema';
import { QuizUpsertWithoutQuestionsInputSchemaObject } from './QuizUpsertWithoutQuestionsInput.schema';
import { QuizWhereUniqueInputSchemaObject } from './QuizWhereUniqueInput.schema';
import { QuizUpdateWithoutQuestionsInputSchemaObject } from './QuizUpdateWithoutQuestionsInput.schema';
import { QuizUncheckedUpdateWithoutQuestionsInputSchemaObject } from './QuizUncheckedUpdateWithoutQuestionsInput.schema'

export const QuizUpdateOneWithoutQuestionsNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(QuizCreateWithoutQuestionsInputSchemaObject),
Joi.object().keys(QuizUncheckedCreateWithoutQuestionsInputSchemaObject)),
  connectOrCreate: Joi.object().keys(QuizCreateOrConnectWithoutQuestionsInputSchemaObject),
  upsert: Joi.object().keys(QuizUpsertWithoutQuestionsInputSchemaObject),
  disconnect: Joi.boolean(),
  delete: Joi.boolean(),
  connect: Joi.object().keys(QuizWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(QuizUpdateWithoutQuestionsInputSchemaObject),
Joi.object().keys(QuizUncheckedUpdateWithoutQuestionsInputSchemaObject))
}