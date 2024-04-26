// @ts-nocheck
import Joi from 'joi';
import { LeaderboardWhereUniqueInputSchemaObject } from './LeaderboardWhereUniqueInput.schema';
import { LeaderboardUpdateWithoutUserInputSchemaObject } from './LeaderboardUpdateWithoutUserInput.schema';
import { LeaderboardUncheckedUpdateWithoutUserInputSchemaObject } from './LeaderboardUncheckedUpdateWithoutUserInput.schema';
import { LeaderboardCreateWithoutUserInputSchemaObject } from './LeaderboardCreateWithoutUserInput.schema';
import { LeaderboardUncheckedCreateWithoutUserInputSchemaObject } from './LeaderboardUncheckedCreateWithoutUserInput.schema'

export const LeaderboardUpsertWithWhereUniqueWithoutUserInputSchemaObject = {
    where: Joi.object().keys(LeaderboardWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(LeaderboardUpdateWithoutUserInputSchemaObject),
Joi.object().keys(LeaderboardUncheckedUpdateWithoutUserInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(LeaderboardCreateWithoutUserInputSchemaObject),
Joi.object().keys(LeaderboardUncheckedCreateWithoutUserInputSchemaObject))
}