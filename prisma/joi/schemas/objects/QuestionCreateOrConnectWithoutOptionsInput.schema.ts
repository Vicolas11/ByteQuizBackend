// @ts-nocheck
import Joi from 'joi';
import { QuestionWhereUniqueInputSchemaObject } from './QuestionWhereUniqueInput.schema';
import { QuestionCreateWithoutOptionsInputSchemaObject } from './QuestionCreateWithoutOptionsInput.schema';
import { QuestionUncheckedCreateWithoutOptionsInputSchemaObject } from './QuestionUncheckedCreateWithoutOptionsInput.schema'

export const QuestionCreateOrConnectWithoutOptionsInputSchemaObject = {
    where: Joi.object().keys(QuestionWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(QuestionCreateWithoutOptionsInputSchemaObject),
Joi.object().keys(QuestionUncheckedCreateWithoutOptionsInputSchemaObject))
}