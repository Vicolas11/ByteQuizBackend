// @ts-nocheck
import Joi from 'joi';
import { QuizCreateWithoutQuestionsInputSchemaObject } from './QuizCreateWithoutQuestionsInput.schema';
import { QuizUncheckedCreateWithoutQuestionsInputSchemaObject } from './QuizUncheckedCreateWithoutQuestionsInput.schema';
import { QuizCreateOrConnectWithoutQuestionsInputSchemaObject } from './QuizCreateOrConnectWithoutQuestionsInput.schema';
import { QuizWhereUniqueInputSchemaObject } from './QuizWhereUniqueInput.schema'

export const QuizCreateNestedOneWithoutQuestionsInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(QuizCreateWithoutQuestionsInputSchemaObject),
Joi.object().keys(QuizUncheckedCreateWithoutQuestionsInputSchemaObject)),
  connectOrCreate: Joi.object().keys(QuizCreateOrConnectWithoutQuestionsInputSchemaObject),
  connect: Joi.object().keys(QuizWhereUniqueInputSchemaObject)
}