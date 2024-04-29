// @ts-nocheck
import Joi from 'joi';
import { QuestionWhereUniqueInputSchemaObject } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithoutUserInputSchemaObject } from './QuestionUpdateWithoutUserInput.schema';
import { QuestionUncheckedUpdateWithoutUserInputSchemaObject } from './QuestionUncheckedUpdateWithoutUserInput.schema'

export const QuestionUpdateWithWhereUniqueWithoutUserInputSchemaObject = {
    where: Joi.object().keys(QuestionWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(QuestionUpdateWithoutUserInputSchemaObject),
Joi.object().keys(QuestionUncheckedUpdateWithoutUserInputSchemaObject))
}