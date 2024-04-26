// @ts-nocheck
import Joi from 'joi';
import { QuizUpdateWithoutQuestionsInputSchemaObject } from './QuizUpdateWithoutQuestionsInput.schema';
import { QuizUncheckedUpdateWithoutQuestionsInputSchemaObject } from './QuizUncheckedUpdateWithoutQuestionsInput.schema';
import { QuizCreateWithoutQuestionsInputSchemaObject } from './QuizCreateWithoutQuestionsInput.schema';
import { QuizUncheckedCreateWithoutQuestionsInputSchemaObject } from './QuizUncheckedCreateWithoutQuestionsInput.schema'

export const QuizUpsertWithoutQuestionsInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(QuizUpdateWithoutQuestionsInputSchemaObject),
Joi.object().keys(QuizUncheckedUpdateWithoutQuestionsInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(QuizCreateWithoutQuestionsInputSchemaObject),
Joi.object().keys(QuizUncheckedCreateWithoutQuestionsInputSchemaObject))
}