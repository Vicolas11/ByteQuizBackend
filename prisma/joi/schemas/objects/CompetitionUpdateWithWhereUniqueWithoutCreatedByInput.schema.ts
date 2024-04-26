// @ts-nocheck
import Joi from 'joi';
import { CompetitionWhereUniqueInputSchemaObject } from './CompetitionWhereUniqueInput.schema';
import { CompetitionUpdateWithoutCreatedByInputSchemaObject } from './CompetitionUpdateWithoutCreatedByInput.schema';
import { CompetitionUncheckedUpdateWithoutCreatedByInputSchemaObject } from './CompetitionUncheckedUpdateWithoutCreatedByInput.schema'

export const CompetitionUpdateWithWhereUniqueWithoutCreatedByInputSchemaObject = {
    where: Joi.object().keys(CompetitionWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(CompetitionUpdateWithoutCreatedByInputSchemaObject),
Joi.object().keys(CompetitionUncheckedUpdateWithoutCreatedByInputSchemaObject))
}