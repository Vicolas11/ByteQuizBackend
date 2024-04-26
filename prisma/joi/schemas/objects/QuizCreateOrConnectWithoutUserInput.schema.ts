// @ts-nocheck
import Joi from 'joi';
import { QuizWhereUniqueInputSchemaObject } from './QuizWhereUniqueInput.schema';
import { QuizCreateWithoutUserInputSchemaObject } from './QuizCreateWithoutUserInput.schema';
import { QuizUncheckedCreateWithoutUserInputSchemaObject } from './QuizUncheckedCreateWithoutUserInput.schema'

export const QuizCreateOrConnectWithoutUserInputSchemaObject = {
    where: Joi.object().keys(QuizWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(QuizCreateWithoutUserInputSchemaObject),
Joi.object().keys(QuizUncheckedCreateWithoutUserInputSchemaObject))
}