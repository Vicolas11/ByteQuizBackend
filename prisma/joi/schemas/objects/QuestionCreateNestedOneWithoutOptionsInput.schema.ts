// @ts-nocheck
import Joi from 'joi';
import { QuestionCreateWithoutOptionsInputSchemaObject } from './QuestionCreateWithoutOptionsInput.schema';
import { QuestionUncheckedCreateWithoutOptionsInputSchemaObject } from './QuestionUncheckedCreateWithoutOptionsInput.schema';
import { QuestionCreateOrConnectWithoutOptionsInputSchemaObject } from './QuestionCreateOrConnectWithoutOptionsInput.schema';
import { QuestionWhereUniqueInputSchemaObject } from './QuestionWhereUniqueInput.schema'

export const QuestionCreateNestedOneWithoutOptionsInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(QuestionCreateWithoutOptionsInputSchemaObject),
Joi.object().keys(QuestionUncheckedCreateWithoutOptionsInputSchemaObject)),
  connectOrCreate: Joi.object().keys(QuestionCreateOrConnectWithoutOptionsInputSchemaObject),
  connect: Joi.object().keys(QuestionWhereUniqueInputSchemaObject)
}