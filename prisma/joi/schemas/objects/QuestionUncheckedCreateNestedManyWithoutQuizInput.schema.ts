// @ts-nocheck
import Joi from 'joi';
import { QuestionCreateWithoutQuizInputSchemaObject } from './QuestionCreateWithoutQuizInput.schema';
import { QuestionUncheckedCreateWithoutQuizInputSchemaObject } from './QuestionUncheckedCreateWithoutQuizInput.schema';
import { QuestionCreateOrConnectWithoutQuizInputSchemaObject } from './QuestionCreateOrConnectWithoutQuizInput.schema';
import { QuestionCreateManyQuizInputEnvelopeSchemaObject } from './QuestionCreateManyQuizInputEnvelope.schema';
import { QuestionWhereUniqueInputSchemaObject } from './QuestionWhereUniqueInput.schema'

export const QuestionUncheckedCreateNestedManyWithoutQuizInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(QuestionCreateWithoutQuizInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionCreateWithoutQuizInputSchemaObject)),
Joi.object().keys(QuestionUncheckedCreateWithoutQuizInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionUncheckedCreateWithoutQuizInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(QuestionCreateOrConnectWithoutQuizInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionCreateOrConnectWithoutQuizInputSchemaObject))),
  createMany: Joi.object().keys(QuestionCreateManyQuizInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(QuestionWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionWhereUniqueInputSchemaObject)))
}