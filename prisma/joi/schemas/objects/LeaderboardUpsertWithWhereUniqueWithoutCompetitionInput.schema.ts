// @ts-nocheck
import Joi from 'joi';
import { LeaderboardWhereUniqueInputSchemaObject } from './LeaderboardWhereUniqueInput.schema';
import { LeaderboardUpdateWithoutCompetitionInputSchemaObject } from './LeaderboardUpdateWithoutCompetitionInput.schema';
import { LeaderboardUncheckedUpdateWithoutCompetitionInputSchemaObject } from './LeaderboardUncheckedUpdateWithoutCompetitionInput.schema';
import { LeaderboardCreateWithoutCompetitionInputSchemaObject } from './LeaderboardCreateWithoutCompetitionInput.schema';
import { LeaderboardUncheckedCreateWithoutCompetitionInputSchemaObject } from './LeaderboardUncheckedCreateWithoutCompetitionInput.schema'

export const LeaderboardUpsertWithWhereUniqueWithoutCompetitionInputSchemaObject = {
    where: Joi.object().keys(LeaderboardWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(LeaderboardUpdateWithoutCompetitionInputSchemaObject),
Joi.object().keys(LeaderboardUncheckedUpdateWithoutCompetitionInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(LeaderboardCreateWithoutCompetitionInputSchemaObject),
Joi.object().keys(LeaderboardUncheckedCreateWithoutCompetitionInputSchemaObject))
}