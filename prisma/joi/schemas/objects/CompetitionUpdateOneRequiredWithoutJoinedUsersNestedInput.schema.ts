// @ts-nocheck
import Joi from 'joi';
import { CompetitionCreateWithoutJoinedUsersInputSchemaObject } from './CompetitionCreateWithoutJoinedUsersInput.schema';
import { CompetitionUncheckedCreateWithoutJoinedUsersInputSchemaObject } from './CompetitionUncheckedCreateWithoutJoinedUsersInput.schema';
import { CompetitionCreateOrConnectWithoutJoinedUsersInputSchemaObject } from './CompetitionCreateOrConnectWithoutJoinedUsersInput.schema';
import { CompetitionUpsertWithoutJoinedUsersInputSchemaObject } from './CompetitionUpsertWithoutJoinedUsersInput.schema';
import { CompetitionWhereUniqueInputSchemaObject } from './CompetitionWhereUniqueInput.schema';
import { CompetitionUpdateWithoutJoinedUsersInputSchemaObject } from './CompetitionUpdateWithoutJoinedUsersInput.schema';
import { CompetitionUncheckedUpdateWithoutJoinedUsersInputSchemaObject } from './CompetitionUncheckedUpdateWithoutJoinedUsersInput.schema'

export const CompetitionUpdateOneRequiredWithoutJoinedUsersNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(CompetitionCreateWithoutJoinedUsersInputSchemaObject),
Joi.object().keys(CompetitionUncheckedCreateWithoutJoinedUsersInputSchemaObject)),
  connectOrCreate: Joi.object().keys(CompetitionCreateOrConnectWithoutJoinedUsersInputSchemaObject),
  upsert: Joi.object().keys(CompetitionUpsertWithoutJoinedUsersInputSchemaObject),
  connect: Joi.object().keys(CompetitionWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(CompetitionUpdateWithoutJoinedUsersInputSchemaObject),
Joi.object().keys(CompetitionUncheckedUpdateWithoutJoinedUsersInputSchemaObject))
}