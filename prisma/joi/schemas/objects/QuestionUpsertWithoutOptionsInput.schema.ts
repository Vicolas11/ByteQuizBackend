// @ts-nocheck
import Joi from 'joi';
import { QuestionUpdateWithoutOptionsInputSchemaObject } from './QuestionUpdateWithoutOptionsInput.schema';
import { QuestionUncheckedUpdateWithoutOptionsInputSchemaObject } from './QuestionUncheckedUpdateWithoutOptionsInput.schema';
import { QuestionCreateWithoutOptionsInputSchemaObject } from './QuestionCreateWithoutOptionsInput.schema';
import { QuestionUncheckedCreateWithoutOptionsInputSchemaObject } from './QuestionUncheckedCreateWithoutOptionsInput.schema'

export const QuestionUpsertWithoutOptionsInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(QuestionUpdateWithoutOptionsInputSchemaObject),
Joi.object().keys(QuestionUncheckedUpdateWithoutOptionsInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(QuestionCreateWithoutOptionsInputSchemaObject),
Joi.object().keys(QuestionUncheckedCreateWithoutOptionsInputSchemaObject))
}