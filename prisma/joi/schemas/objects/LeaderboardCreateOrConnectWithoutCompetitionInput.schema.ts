// @ts-nocheck
import Joi from 'joi';
import { LeaderboardWhereUniqueInputSchemaObject } from './LeaderboardWhereUniqueInput.schema';
import { LeaderboardCreateWithoutCompetitionInputSchemaObject } from './LeaderboardCreateWithoutCompetitionInput.schema';
import { LeaderboardUncheckedCreateWithoutCompetitionInputSchemaObject } from './LeaderboardUncheckedCreateWithoutCompetitionInput.schema'

export const LeaderboardCreateOrConnectWithoutCompetitionInputSchemaObject = {
    where: Joi.object().keys(LeaderboardWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(LeaderboardCreateWithoutCompetitionInputSchemaObject),
Joi.object().keys(LeaderboardUncheckedCreateWithoutCompetitionInputSchemaObject))
}