// @ts-nocheck
import Joi from 'joi';
import { QuizWhereUniqueInputSchemaObject } from './QuizWhereUniqueInput.schema';
import { QuizUpdateWithoutUserInputSchemaObject } from './QuizUpdateWithoutUserInput.schema';
import { QuizUncheckedUpdateWithoutUserInputSchemaObject } from './QuizUncheckedUpdateWithoutUserInput.schema';
import { QuizCreateWithoutUserInputSchemaObject } from './QuizCreateWithoutUserInput.schema';
import { QuizUncheckedCreateWithoutUserInputSchemaObject } from './QuizUncheckedCreateWithoutUserInput.schema'

export const QuizUpsertWithWhereUniqueWithoutUserInputSchemaObject = {
    where: Joi.object().keys(QuizWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(QuizUpdateWithoutUserInputSchemaObject),
Joi.object().keys(QuizUncheckedUpdateWithoutUserInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(QuizCreateWithoutUserInputSchemaObject),
Joi.object().keys(QuizUncheckedCreateWithoutUserInputSchemaObject))
}