// @ts-nocheck
import Joi from 'joi';
import { CompetitionCreateWithoutLeaderboardsInputSchemaObject } from './CompetitionCreateWithoutLeaderboardsInput.schema';
import { CompetitionUncheckedCreateWithoutLeaderboardsInputSchemaObject } from './CompetitionUncheckedCreateWithoutLeaderboardsInput.schema';
import { CompetitionCreateOrConnectWithoutLeaderboardsInputSchemaObject } from './CompetitionCreateOrConnectWithoutLeaderboardsInput.schema';
import { CompetitionUpsertWithoutLeaderboardsInputSchemaObject } from './CompetitionUpsertWithoutLeaderboardsInput.schema';
import { CompetitionWhereUniqueInputSchemaObject } from './CompetitionWhereUniqueInput.schema';
import { CompetitionUpdateWithoutLeaderboardsInputSchemaObject } from './CompetitionUpdateWithoutLeaderboardsInput.schema';
import { CompetitionUncheckedUpdateWithoutLeaderboardsInputSchemaObject } from './CompetitionUncheckedUpdateWithoutLeaderboardsInput.schema'

export const CompetitionUpdateOneWithoutLeaderboardsNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(CompetitionCreateWithoutLeaderboardsInputSchemaObject),
Joi.object().keys(CompetitionUncheckedCreateWithoutLeaderboardsInputSchemaObject)),
  connectOrCreate: Joi.object().keys(CompetitionCreateOrConnectWithoutLeaderboardsInputSchemaObject),
  upsert: Joi.object().keys(CompetitionUpsertWithoutLeaderboardsInputSchemaObject),
  disconnect: Joi.boolean(),
  delete: Joi.boolean(),
  connect: Joi.object().keys(CompetitionWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(CompetitionUpdateWithoutLeaderboardsInputSchemaObject),
Joi.object().keys(CompetitionUncheckedUpdateWithoutLeaderboardsInputSchemaObject))
}