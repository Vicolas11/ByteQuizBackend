// @ts-nocheck
import Joi from 'joi';
import { QuestionCreateWithoutOptionsInputSchemaObject } from './QuestionCreateWithoutOptionsInput.schema';
import { QuestionUncheckedCreateWithoutOptionsInputSchemaObject } from './QuestionUncheckedCreateWithoutOptionsInput.schema';
import { QuestionCreateOrConnectWithoutOptionsInputSchemaObject } from './QuestionCreateOrConnectWithoutOptionsInput.schema';
import { QuestionUpsertWithoutOptionsInputSchemaObject } from './QuestionUpsertWithoutOptionsInput.schema';
import { QuestionWhereUniqueInputSchemaObject } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithoutOptionsInputSchemaObject } from './QuestionUpdateWithoutOptionsInput.schema';
import { QuestionUncheckedUpdateWithoutOptionsInputSchemaObject } from './QuestionUncheckedUpdateWithoutOptionsInput.schema'

export const QuestionUpdateOneWithoutOptionsNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(QuestionCreateWithoutOptionsInputSchemaObject),
Joi.object().keys(QuestionUncheckedCreateWithoutOptionsInputSchemaObject)),
  connectOrCreate: Joi.object().keys(QuestionCreateOrConnectWithoutOptionsInputSchemaObject),
  upsert: Joi.object().keys(QuestionUpsertWithoutOptionsInputSchemaObject),
  disconnect: Joi.boolean(),
  delete: Joi.boolean(),
  connect: Joi.object().keys(QuestionWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(QuestionUpdateWithoutOptionsInputSchemaObject),
Joi.object().keys(QuestionUncheckedUpdateWithoutOptionsInputSchemaObject))
}