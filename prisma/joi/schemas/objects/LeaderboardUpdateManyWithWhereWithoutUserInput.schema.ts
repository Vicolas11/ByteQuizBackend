// @ts-nocheck
import Joi from 'joi';
import { LeaderboardScalarWhereInputSchemaObject } from './LeaderboardScalarWhereInput.schema';
import { LeaderboardUpdateManyMutationInputSchemaObject } from './LeaderboardUpdateManyMutationInput.schema';
import { LeaderboardUncheckedUpdateManyWithoutLeaderboardInputSchemaObject } from './LeaderboardUncheckedUpdateManyWithoutLeaderboardInput.schema'

export const LeaderboardUpdateManyWithWhereWithoutUserInputSchemaObject = {
    where: Joi.object().keys(LeaderboardScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(LeaderboardUpdateManyMutationInputSchemaObject),
Joi.object().keys(LeaderboardUncheckedUpdateManyWithoutLeaderboardInputSchemaObject))
}