// @ts-nocheck
import Joi from 'joi';
import { CompetitionCreateWithoutCreatedByInputSchemaObject } from './CompetitionCreateWithoutCreatedByInput.schema';
import { CompetitionUncheckedCreateWithoutCreatedByInputSchemaObject } from './CompetitionUncheckedCreateWithoutCreatedByInput.schema';
import { CompetitionCreateOrConnectWithoutCreatedByInputSchemaObject } from './CompetitionCreateOrConnectWithoutCreatedByInput.schema';
import { CompetitionCreateManyCreatedByInputEnvelopeSchemaObject } from './CompetitionCreateManyCreatedByInputEnvelope.schema';
import { CompetitionWhereUniqueInputSchemaObject } from './CompetitionWhereUniqueInput.schema'

export const CompetitionCreateNestedManyWithoutCreatedByInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(CompetitionCreateWithoutCreatedByInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionCreateWithoutCreatedByInputSchemaObject)),
Joi.object().keys(CompetitionUncheckedCreateWithoutCreatedByInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionUncheckedCreateWithoutCreatedByInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(CompetitionCreateOrConnectWithoutCreatedByInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionCreateOrConnectWithoutCreatedByInputSchemaObject))),
  createMany: Joi.object().keys(CompetitionCreateManyCreatedByInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(CompetitionWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionWhereUniqueInputSchemaObject)))
}