// @ts-nocheck
import Joi from 'joi';
import { OptionCreateWithoutQuestionInputSchemaObject } from './OptionCreateWithoutQuestionInput.schema';
import { OptionUncheckedCreateWithoutQuestionInputSchemaObject } from './OptionUncheckedCreateWithoutQuestionInput.schema';
import { OptionCreateOrConnectWithoutQuestionInputSchemaObject } from './OptionCreateOrConnectWithoutQuestionInput.schema';
import { OptionCreateManyQuestionInputEnvelopeSchemaObject } from './OptionCreateManyQuestionInputEnvelope.schema';
import { OptionWhereUniqueInputSchemaObject } from './OptionWhereUniqueInput.schema'

export const OptionCreateNestedManyWithoutQuestionInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(OptionCreateWithoutQuestionInputSchemaObject),
Joi.array().items(Joi.object().keys(OptionCreateWithoutQuestionInputSchemaObject)),
Joi.object().keys(OptionUncheckedCreateWithoutQuestionInputSchemaObject),
Joi.array().items(Joi.object().keys(OptionUncheckedCreateWithoutQuestionInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(OptionCreateOrConnectWithoutQuestionInputSchemaObject),
Joi.array().items(Joi.object().keys(OptionCreateOrConnectWithoutQuestionInputSchemaObject))),
  createMany: Joi.object().keys(OptionCreateManyQuestionInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(OptionWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(OptionWhereUniqueInputSchemaObject)))
}