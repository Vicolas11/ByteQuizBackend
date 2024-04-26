// @ts-nocheck
import Joi from 'joi';
import { CompetitionCreateWithoutLeaderboardsInputSchemaObject } from './CompetitionCreateWithoutLeaderboardsInput.schema';
import { CompetitionUncheckedCreateWithoutLeaderboardsInputSchemaObject } from './CompetitionUncheckedCreateWithoutLeaderboardsInput.schema';
import { CompetitionCreateOrConnectWithoutLeaderboardsInputSchemaObject } from './CompetitionCreateOrConnectWithoutLeaderboardsInput.schema';
import { CompetitionWhereUniqueInputSchemaObject } from './CompetitionWhereUniqueInput.schema'

export const CompetitionCreateNestedOneWithoutLeaderboardsInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(CompetitionCreateWithoutLeaderboardsInputSchemaObject),
Joi.object().keys(CompetitionUncheckedCreateWithoutLeaderboardsInputSchemaObject)),
  connectOrCreate: Joi.object().keys(CompetitionCreateOrConnectWithoutLeaderboardsInputSchemaObject),
  connect: Joi.object().keys(CompetitionWhereUniqueInputSchemaObject)
}