// @ts-nocheck
import Joi from 'joi';
import { QuestionCreateWithoutUserInputSchemaObject } from './QuestionCreateWithoutUserInput.schema';
import { QuestionUncheckedCreateWithoutUserInputSchemaObject } from './QuestionUncheckedCreateWithoutUserInput.schema';
import { QuestionCreateOrConnectWithoutUserInputSchemaObject } from './QuestionCreateOrConnectWithoutUserInput.schema';
import { QuestionCreateManyUserInputEnvelopeSchemaObject } from './QuestionCreateManyUserInputEnvelope.schema';
import { QuestionWhereUniqueInputSchemaObject } from './QuestionWhereUniqueInput.schema'

export const QuestionUncheckedCreateNestedManyWithoutUserInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(QuestionCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionCreateWithoutUserInputSchemaObject)),
Joi.object().keys(QuestionUncheckedCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionUncheckedCreateWithoutUserInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(QuestionCreateOrConnectWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionCreateOrConnectWithoutUserInputSchemaObject))),
  createMany: Joi.object().keys(QuestionCreateManyUserInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(QuestionWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionWhereUniqueInputSchemaObject)))
}