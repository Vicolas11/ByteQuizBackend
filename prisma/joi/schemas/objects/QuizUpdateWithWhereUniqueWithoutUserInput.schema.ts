// @ts-nocheck
import Joi from 'joi';
import { QuizWhereUniqueInputSchemaObject } from './QuizWhereUniqueInput.schema';
import { QuizUpdateWithoutUserInputSchemaObject } from './QuizUpdateWithoutUserInput.schema';
import { QuizUncheckedUpdateWithoutUserInputSchemaObject } from './QuizUncheckedUpdateWithoutUserInput.schema'

export const QuizUpdateWithWhereUniqueWithoutUserInputSchemaObject = {
    where: Joi.object().keys(QuizWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(QuizUpdateWithoutUserInputSchemaObject),
Joi.object().keys(QuizUncheckedUpdateWithoutUserInputSchemaObject))
}