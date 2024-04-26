// @ts-nocheck
import Joi from 'joi';
import { OptionCreateWithoutQuestionInputSchemaObject } from './OptionCreateWithoutQuestionInput.schema';
import { OptionUncheckedCreateWithoutQuestionInputSchemaObject } from './OptionUncheckedCreateWithoutQuestionInput.schema';
import { OptionCreateOrConnectWithoutQuestionInputSchemaObject } from './OptionCreateOrConnectWithoutQuestionInput.schema';
import { OptionUpsertWithWhereUniqueWithoutQuestionInputSchemaObject } from './OptionUpsertWithWhereUniqueWithoutQuestionInput.schema';
import { OptionCreateManyQuestionInputEnvelopeSchemaObject } from './OptionCreateManyQuestionInputEnvelope.schema';
import { OptionWhereUniqueInputSchemaObject } from './OptionWhereUniqueInput.schema';
import { OptionUpdateWithWhereUniqueWithoutQuestionInputSchemaObject } from './OptionUpdateWithWhereUniqueWithoutQuestionInput.schema';
import { OptionUpdateManyWithWhereWithoutQuestionInputSchemaObject } from './OptionUpdateManyWithWhereWithoutQuestionInput.schema';
import { OptionScalarWhereInputSchemaObject } from './OptionScalarWhereInput.schema'

export const OptionUncheckedUpdateManyWithoutQuestionNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(OptionCreateWithoutQuestionInputSchemaObject),
Joi.array().items(Joi.object().keys(OptionCreateWithoutQuestionInputSchemaObject)),
Joi.object().keys(OptionUncheckedCreateWithoutQuestionInputSchemaObject),
Joi.array().items(Joi.object().keys(OptionUncheckedCreateWithoutQuestionInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(OptionCreateOrConnectWithoutQuestionInputSchemaObject),
Joi.array().items(Joi.object().keys(OptionCreateOrConnectWithoutQuestionInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(OptionUpsertWithWhereUniqueWithoutQuestionInputSchemaObject),
Joi.array().items(Joi.object().keys(OptionUpsertWithWhereUniqueWithoutQuestionInputSchemaObject))),
  createMany: Joi.object().keys(OptionCreateManyQuestionInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(OptionWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(OptionWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(OptionWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(OptionWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(OptionWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(OptionWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(OptionWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(OptionWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(OptionUpdateWithWhereUniqueWithoutQuestionInputSchemaObject),
Joi.array().items(Joi.object().keys(OptionUpdateWithWhereUniqueWithoutQuestionInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(OptionUpdateManyWithWhereWithoutQuestionInputSchemaObject),
Joi.array().items(Joi.object().keys(OptionUpdateManyWithWhereWithoutQuestionInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(OptionScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(OptionScalarWhereInputSchemaObject)))
}