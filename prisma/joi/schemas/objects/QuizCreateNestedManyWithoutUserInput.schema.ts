// @ts-nocheck
import Joi from 'joi';
import { QuizCreateWithoutUserInputSchemaObject } from './QuizCreateWithoutUserInput.schema';
import { QuizUncheckedCreateWithoutUserInputSchemaObject } from './QuizUncheckedCreateWithoutUserInput.schema';
import { QuizCreateOrConnectWithoutUserInputSchemaObject } from './QuizCreateOrConnectWithoutUserInput.schema';
import { QuizCreateManyUserInputEnvelopeSchemaObject } from './QuizCreateManyUserInputEnvelope.schema';
import { QuizWhereUniqueInputSchemaObject } from './QuizWhereUniqueInput.schema'

export const QuizCreateNestedManyWithoutUserInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(QuizCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(QuizCreateWithoutUserInputSchemaObject)),
Joi.object().keys(QuizUncheckedCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(QuizUncheckedCreateWithoutUserInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(QuizCreateOrConnectWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(QuizCreateOrConnectWithoutUserInputSchemaObject))),
  createMany: Joi.object().keys(QuizCreateManyUserInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(QuizWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(QuizWhereUniqueInputSchemaObject)))
}