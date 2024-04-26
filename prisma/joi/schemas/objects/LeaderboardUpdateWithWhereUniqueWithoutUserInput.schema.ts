// @ts-nocheck
import Joi from 'joi';
import { LeaderboardWhereUniqueInputSchemaObject } from './LeaderboardWhereUniqueInput.schema';
import { LeaderboardUpdateWithoutUserInputSchemaObject } from './LeaderboardUpdateWithoutUserInput.schema';
import { LeaderboardUncheckedUpdateWithoutUserInputSchemaObject } from './LeaderboardUncheckedUpdateWithoutUserInput.schema'

export const LeaderboardUpdateWithWhereUniqueWithoutUserInputSchemaObject = {
    where: Joi.object().keys(LeaderboardWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(LeaderboardUpdateWithoutUserInputSchemaObject),
Joi.object().keys(LeaderboardUncheckedUpdateWithoutUserInputSchemaObject))
}