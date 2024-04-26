// @ts-nocheck
import Joi from 'joi';
import { QuizCreateWithoutUserInputSchemaObject } from './QuizCreateWithoutUserInput.schema';
import { QuizUncheckedCreateWithoutUserInputSchemaObject } from './QuizUncheckedCreateWithoutUserInput.schema';
import { QuizCreateOrConnectWithoutUserInputSchemaObject } from './QuizCreateOrConnectWithoutUserInput.schema';
import { QuizUpsertWithWhereUniqueWithoutUserInputSchemaObject } from './QuizUpsertWithWhereUniqueWithoutUserInput.schema';
import { QuizCreateManyUserInputEnvelopeSchemaObject } from './QuizCreateManyUserInputEnvelope.schema';
import { QuizWhereUniqueInputSchemaObject } from './QuizWhereUniqueInput.schema';
import { QuizUpdateWithWhereUniqueWithoutUserInputSchemaObject } from './QuizUpdateWithWhereUniqueWithoutUserInput.schema';
import { QuizUpdateManyWithWhereWithoutUserInputSchemaObject } from './QuizUpdateManyWithWhereWithoutUserInput.schema';
import { QuizScalarWhereInputSchemaObject } from './QuizScalarWhereInput.schema'

export const QuizUpdateManyWithoutUserNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(QuizCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(QuizCreateWithoutUserInputSchemaObject)),
Joi.object().keys(QuizUncheckedCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(QuizUncheckedCreateWithoutUserInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(QuizCreateOrConnectWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(QuizCreateOrConnectWithoutUserInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(QuizUpsertWithWhereUniqueWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(QuizUpsertWithWhereUniqueWithoutUserInputSchemaObject))),
  createMany: Joi.object().keys(QuizCreateManyUserInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(QuizWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(QuizWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(QuizWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(QuizWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(QuizWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(QuizWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(QuizWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(QuizWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(QuizUpdateWithWhereUniqueWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(QuizUpdateWithWhereUniqueWithoutUserInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(QuizUpdateManyWithWhereWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(QuizUpdateManyWithWhereWithoutUserInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(QuizScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(QuizScalarWhereInputSchemaObject)))
}