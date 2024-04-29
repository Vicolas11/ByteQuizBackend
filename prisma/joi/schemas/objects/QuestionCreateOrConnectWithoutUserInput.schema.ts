// @ts-nocheck
import Joi from 'joi';
import { QuestionWhereUniqueInputSchemaObject } from './QuestionWhereUniqueInput.schema';
import { QuestionCreateWithoutUserInputSchemaObject } from './QuestionCreateWithoutUserInput.schema';
import { QuestionUncheckedCreateWithoutUserInputSchemaObject } from './QuestionUncheckedCreateWithoutUserInput.schema'

export const QuestionCreateOrConnectWithoutUserInputSchemaObject = {
    where: Joi.object().keys(QuestionWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(QuestionCreateWithoutUserInputSchemaObject),
Joi.object().keys(QuestionUncheckedCreateWithoutUserInputSchemaObject))
}