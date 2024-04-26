// @ts-nocheck
import Joi from 'joi';
import { LeaderboardScalarWhereInputSchemaObject } from './LeaderboardScalarWhereInput.schema';
import { LeaderboardUpdateManyMutationInputSchemaObject } from './LeaderboardUpdateManyMutationInput.schema';
import { LeaderboardUncheckedUpdateManyWithoutLeaderboardsInputSchemaObject } from './LeaderboardUncheckedUpdateManyWithoutLeaderboardsInput.schema'

export const LeaderboardUpdateManyWithWhereWithoutCompetitionInputSchemaObject = {
    where: Joi.object().keys(LeaderboardScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(LeaderboardUpdateManyMutationInputSchemaObject),
Joi.object().keys(LeaderboardUncheckedUpdateManyWithoutLeaderboardsInputSchemaObject))
}