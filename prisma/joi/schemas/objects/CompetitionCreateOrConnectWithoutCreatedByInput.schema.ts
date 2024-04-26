// @ts-nocheck
import Joi from 'joi';
import { CompetitionWhereUniqueInputSchemaObject } from './CompetitionWhereUniqueInput.schema';
import { CompetitionCreateWithoutCreatedByInputSchemaObject } from './CompetitionCreateWithoutCreatedByInput.schema';
import { CompetitionUncheckedCreateWithoutCreatedByInputSchemaObject } from './CompetitionUncheckedCreateWithoutCreatedByInput.schema'

export const CompetitionCreateOrConnectWithoutCreatedByInputSchemaObject = {
    where: Joi.object().keys(CompetitionWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(CompetitionCreateWithoutCreatedByInputSchemaObject),
Joi.object().keys(CompetitionUncheckedCreateWithoutCreatedByInputSchemaObject))
}