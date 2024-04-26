// @ts-nocheck
import Joi from 'joi';
import { CompetitionScalarWhereInputSchemaObject } from './CompetitionScalarWhereInput.schema';
import { CompetitionUpdateManyMutationInputSchemaObject } from './CompetitionUpdateManyMutationInput.schema';
import { CompetitionUncheckedUpdateManyWithoutCreatedCompetitionsInputSchemaObject } from './CompetitionUncheckedUpdateManyWithoutCreatedCompetitionsInput.schema'

export const CompetitionUpdateManyWithWhereWithoutCreatedByInputSchemaObject = {
    where: Joi.object().keys(CompetitionScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(CompetitionUpdateManyMutationInputSchemaObject),
Joi.object().keys(CompetitionUncheckedUpdateManyWithoutCreatedCompetitionsInputSchemaObject))
}