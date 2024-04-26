// @ts-nocheck
import Joi from 'joi';
import { CompetitionUpdateWithoutLeaderboardsInputSchemaObject } from './CompetitionUpdateWithoutLeaderboardsInput.schema';
import { CompetitionUncheckedUpdateWithoutLeaderboardsInputSchemaObject } from './CompetitionUncheckedUpdateWithoutLeaderboardsInput.schema';
import { CompetitionCreateWithoutLeaderboardsInputSchemaObject } from './CompetitionCreateWithoutLeaderboardsInput.schema';
import { CompetitionUncheckedCreateWithoutLeaderboardsInputSchemaObject } from './CompetitionUncheckedCreateWithoutLeaderboardsInput.schema'

export const CompetitionUpsertWithoutLeaderboardsInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(CompetitionUpdateWithoutLeaderboardsInputSchemaObject),
Joi.object().keys(CompetitionUncheckedUpdateWithoutLeaderboardsInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(CompetitionCreateWithoutLeaderboardsInputSchemaObject),
Joi.object().keys(CompetitionUncheckedCreateWithoutLeaderboardsInputSchemaObject))
}