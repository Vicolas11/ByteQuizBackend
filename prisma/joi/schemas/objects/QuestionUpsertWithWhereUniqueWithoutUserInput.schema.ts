// @ts-nocheck
import Joi from 'joi';
import { QuestionWhereUniqueInputSchemaObject } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithoutUserInputSchemaObject } from './QuestionUpdateWithoutUserInput.schema';
import { QuestionUncheckedUpdateWithoutUserInputSchemaObject } from './QuestionUncheckedUpdateWithoutUserInput.schema';
import { QuestionCreateWithoutUserInputSchemaObject } from './QuestionCreateWithoutUserInput.schema';
import { QuestionUncheckedCreateWithoutUserInputSchemaObject } from './QuestionUncheckedCreateWithoutUserInput.schema'

export const QuestionUpsertWithWhereUniqueWithoutUserInputSchemaObject = {
    where: Joi.object().keys(QuestionWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(QuestionUpdateWithoutUserInputSchemaObject),
Joi.object().keys(QuestionUncheckedUpdateWithoutUserInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(QuestionCreateWithoutUserInputSchemaObject),
Joi.object().keys(QuestionUncheckedCreateWithoutUserInputSchemaObject))
}