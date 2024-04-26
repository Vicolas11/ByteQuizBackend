// @ts-nocheck
import Joi from 'joi';
import { CompetitionWhereUniqueInputSchemaObject } from './CompetitionWhereUniqueInput.schema';
import { CompetitionUpdateWithoutCreatedByInputSchemaObject } from './CompetitionUpdateWithoutCreatedByInput.schema';
import { CompetitionUncheckedUpdateWithoutCreatedByInputSchemaObject } from './CompetitionUncheckedUpdateWithoutCreatedByInput.schema';
import { CompetitionCreateWithoutCreatedByInputSchemaObject } from './CompetitionCreateWithoutCreatedByInput.schema';
import { CompetitionUncheckedCreateWithoutCreatedByInputSchemaObject } from './CompetitionUncheckedCreateWithoutCreatedByInput.schema'

export const CompetitionUpsertWithWhereUniqueWithoutCreatedByInputSchemaObject = {
    where: Joi.object().keys(CompetitionWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(CompetitionUpdateWithoutCreatedByInputSchemaObject),
Joi.object().keys(CompetitionUncheckedUpdateWithoutCreatedByInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(CompetitionCreateWithoutCreatedByInputSchemaObject),
Joi.object().keys(CompetitionUncheckedCreateWithoutCreatedByInputSchemaObject))
}