// @ts-nocheck
import Joi from 'joi';
import { QuizWhereUniqueInputSchemaObject } from './QuizWhereUniqueInput.schema';
import { QuizCreateWithoutQuestionsInputSchemaObject } from './QuizCreateWithoutQuestionsInput.schema';
import { QuizUncheckedCreateWithoutQuestionsInputSchemaObject } from './QuizUncheckedCreateWithoutQuestionsInput.schema'

export const QuizCreateOrConnectWithoutQuestionsInputSchemaObject = {
    where: Joi.object().keys(QuizWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(QuizCreateWithoutQuestionsInputSchemaObject),
Joi.object().keys(QuizUncheckedCreateWithoutQuestionsInputSchemaObject))
}