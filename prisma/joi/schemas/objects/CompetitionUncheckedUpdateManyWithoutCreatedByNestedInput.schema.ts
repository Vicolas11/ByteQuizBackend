// @ts-nocheck
import Joi from 'joi';
import { CompetitionCreateWithoutCreatedByInputSchemaObject } from './CompetitionCreateWithoutCreatedByInput.schema';
import { CompetitionUncheckedCreateWithoutCreatedByInputSchemaObject } from './CompetitionUncheckedCreateWithoutCreatedByInput.schema';
import { CompetitionCreateOrConnectWithoutCreatedByInputSchemaObject } from './CompetitionCreateOrConnectWithoutCreatedByInput.schema';
import { CompetitionUpsertWithWhereUniqueWithoutCreatedByInputSchemaObject } from './CompetitionUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { CompetitionCreateManyCreatedByInputEnvelopeSchemaObject } from './CompetitionCreateManyCreatedByInputEnvelope.schema';
import { CompetitionWhereUniqueInputSchemaObject } from './CompetitionWhereUniqueInput.schema';
import { CompetitionUpdateWithWhereUniqueWithoutCreatedByInputSchemaObject } from './CompetitionUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { CompetitionUpdateManyWithWhereWithoutCreatedByInputSchemaObject } from './CompetitionUpdateManyWithWhereWithoutCreatedByInput.schema';
import { CompetitionScalarWhereInputSchemaObject } from './CompetitionScalarWhereInput.schema'

export const CompetitionUncheckedUpdateManyWithoutCreatedByNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(CompetitionCreateWithoutCreatedByInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionCreateWithoutCreatedByInputSchemaObject)),
Joi.object().keys(CompetitionUncheckedCreateWithoutCreatedByInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionUncheckedCreateWithoutCreatedByInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(CompetitionCreateOrConnectWithoutCreatedByInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionCreateOrConnectWithoutCreatedByInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(CompetitionUpsertWithWhereUniqueWithoutCreatedByInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionUpsertWithWhereUniqueWithoutCreatedByInputSchemaObject))),
  createMany: Joi.object().keys(CompetitionCreateManyCreatedByInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(CompetitionWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(CompetitionWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(CompetitionWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(CompetitionWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(CompetitionUpdateWithWhereUniqueWithoutCreatedByInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionUpdateWithWhereUniqueWithoutCreatedByInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(CompetitionUpdateManyWithWhereWithoutCreatedByInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionUpdateManyWithWhereWithoutCreatedByInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(CompetitionScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionScalarWhereInputSchemaObject)))
}