// @ts-nocheck
import Joi from 'joi';
import { QuestionCreateWithoutUserInputSchemaObject } from './QuestionCreateWithoutUserInput.schema';
import { QuestionUncheckedCreateWithoutUserInputSchemaObject } from './QuestionUncheckedCreateWithoutUserInput.schema';
import { QuestionCreateOrConnectWithoutUserInputSchemaObject } from './QuestionCreateOrConnectWithoutUserInput.schema';
import { QuestionUpsertWithWhereUniqueWithoutUserInputSchemaObject } from './QuestionUpsertWithWhereUniqueWithoutUserInput.schema';
import { QuestionCreateManyUserInputEnvelopeSchemaObject } from './QuestionCreateManyUserInputEnvelope.schema';
import { QuestionWhereUniqueInputSchemaObject } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithWhereUniqueWithoutUserInputSchemaObject } from './QuestionUpdateWithWhereUniqueWithoutUserInput.schema';
import { QuestionUpdateManyWithWhereWithoutUserInputSchemaObject } from './QuestionUpdateManyWithWhereWithoutUserInput.schema';
import { QuestionScalarWhereInputSchemaObject } from './QuestionScalarWhereInput.schema'

export const QuestionUpdateManyWithoutUserNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(QuestionCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionCreateWithoutUserInputSchemaObject)),
Joi.object().keys(QuestionUncheckedCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionUncheckedCreateWithoutUserInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(QuestionCreateOrConnectWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionCreateOrConnectWithoutUserInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(QuestionUpsertWithWhereUniqueWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionUpsertWithWhereUniqueWithoutUserInputSchemaObject))),
  createMany: Joi.object().keys(QuestionCreateManyUserInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(QuestionWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(QuestionWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(QuestionWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(QuestionWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(QuestionUpdateWithWhereUniqueWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionUpdateWithWhereUniqueWithoutUserInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(QuestionUpdateManyWithWhereWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionUpdateManyWithWhereWithoutUserInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(QuestionScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionScalarWhereInputSchemaObject)))
}