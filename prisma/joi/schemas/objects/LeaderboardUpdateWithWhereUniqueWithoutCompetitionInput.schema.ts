// @ts-nocheck
import Joi from 'joi';
import { LeaderboardWhereUniqueInputSchemaObject } from './LeaderboardWhereUniqueInput.schema';
import { LeaderboardUpdateWithoutCompetitionInputSchemaObject } from './LeaderboardUpdateWithoutCompetitionInput.schema';
import { LeaderboardUncheckedUpdateWithoutCompetitionInputSchemaObject } from './LeaderboardUncheckedUpdateWithoutCompetitionInput.schema'

export const LeaderboardUpdateWithWhereUniqueWithoutCompetitionInputSchemaObject = {
    where: Joi.object().keys(LeaderboardWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(LeaderboardUpdateWithoutCompetitionInputSchemaObject),
Joi.object().keys(LeaderboardUncheckedUpdateWithoutCompetitionInputSchemaObject))
}