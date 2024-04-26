// @ts-nocheck
import Joi from 'joi';
import { QuestionCreateWithoutQuizInputSchemaObject } from './QuestionCreateWithoutQuizInput.schema';
import { QuestionUncheckedCreateWithoutQuizInputSchemaObject } from './QuestionUncheckedCreateWithoutQuizInput.schema';
import { QuestionCreateOrConnectWithoutQuizInputSchemaObject } from './QuestionCreateOrConnectWithoutQuizInput.schema';
import { QuestionUpsertWithWhereUniqueWithoutQuizInputSchemaObject } from './QuestionUpsertWithWhereUniqueWithoutQuizInput.schema';
import { QuestionCreateManyQuizInputEnvelopeSchemaObject } from './QuestionCreateManyQuizInputEnvelope.schema';
import { QuestionWhereUniqueInputSchemaObject } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithWhereUniqueWithoutQuizInputSchemaObject } from './QuestionUpdateWithWhereUniqueWithoutQuizInput.schema';
import { QuestionUpdateManyWithWhereWithoutQuizInputSchemaObject } from './QuestionUpdateManyWithWhereWithoutQuizInput.schema';
import { QuestionScalarWhereInputSchemaObject } from './QuestionScalarWhereInput.schema'

export const QuestionUncheckedUpdateManyWithoutQuizNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(QuestionCreateWithoutQuizInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionCreateWithoutQuizInputSchemaObject)),
Joi.object().keys(QuestionUncheckedCreateWithoutQuizInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionUncheckedCreateWithoutQuizInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(QuestionCreateOrConnectWithoutQuizInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionCreateOrConnectWithoutQuizInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(QuestionUpsertWithWhereUniqueWithoutQuizInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionUpsertWithWhereUniqueWithoutQuizInputSchemaObject))),
  createMany: Joi.object().keys(QuestionCreateManyQuizInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(QuestionWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(QuestionWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(QuestionWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(QuestionWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(QuestionUpdateWithWhereUniqueWithoutQuizInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionUpdateWithWhereUniqueWithoutQuizInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(QuestionUpdateManyWithWhereWithoutQuizInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionUpdateManyWithWhereWithoutQuizInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(QuestionScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionScalarWhereInputSchemaObject)))
}