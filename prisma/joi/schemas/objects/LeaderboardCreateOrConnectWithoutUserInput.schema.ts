// @ts-nocheck
import Joi from 'joi';
import { LeaderboardWhereUniqueInputSchemaObject } from './LeaderboardWhereUniqueInput.schema';
import { LeaderboardCreateWithoutUserInputSchemaObject } from './LeaderboardCreateWithoutUserInput.schema';
import { LeaderboardUncheckedCreateWithoutUserInputSchemaObject } from './LeaderboardUncheckedCreateWithoutUserInput.schema'

export const LeaderboardCreateOrConnectWithoutUserInputSchemaObject = {
    where: Joi.object().keys(LeaderboardWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(LeaderboardCreateWithoutUserInputSchemaObject),
Joi.object().keys(LeaderboardUncheckedCreateWithoutUserInputSchemaObject))
}