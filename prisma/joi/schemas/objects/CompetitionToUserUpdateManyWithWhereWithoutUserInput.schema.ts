// @ts-nocheck
import Joi from 'joi';
import { CompetitionToUserScalarWhereInputSchemaObject } from './CompetitionToUserScalarWhereInput.schema';
import { CompetitionToUserUpdateManyMutationInputSchemaObject } from './CompetitionToUserUpdateManyMutationInput.schema';
import { CompetitionToUserUncheckedUpdateManyWithoutJoinedCompetitionsInputSchemaObject } from './CompetitionToUserUncheckedUpdateManyWithoutJoinedCompetitionsInput.schema'

export const CompetitionToUserUpdateManyWithWhereWithoutUserInputSchemaObject = {
    where: Joi.object().keys(CompetitionToUserScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(CompetitionToUserUpdateManyMutationInputSchemaObject),
Joi.object().keys(CompetitionToUserUncheckedUpdateManyWithoutJoinedCompetitionsInputSchemaObject))
}