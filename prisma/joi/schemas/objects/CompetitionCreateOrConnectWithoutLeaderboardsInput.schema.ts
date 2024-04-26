// @ts-nocheck
import Joi from 'joi';
import { CompetitionWhereUniqueInputSchemaObject } from './CompetitionWhereUniqueInput.schema';
import { CompetitionCreateWithoutLeaderboardsInputSchemaObject } from './CompetitionCreateWithoutLeaderboardsInput.schema';
import { CompetitionUncheckedCreateWithoutLeaderboardsInputSchemaObject } from './CompetitionUncheckedCreateWithoutLeaderboardsInput.schema'

export const CompetitionCreateOrConnectWithoutLeaderboardsInputSchemaObject = {
    where: Joi.object().keys(CompetitionWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(CompetitionCreateWithoutLeaderboardsInputSchemaObject),
Joi.object().keys(CompetitionUncheckedCreateWithoutLeaderboardsInputSchemaObject))
}