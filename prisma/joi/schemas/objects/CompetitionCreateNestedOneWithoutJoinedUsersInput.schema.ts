// @ts-nocheck
import Joi from 'joi';
import { CompetitionCreateWithoutJoinedUsersInputSchemaObject } from './CompetitionCreateWithoutJoinedUsersInput.schema';
import { CompetitionUncheckedCreateWithoutJoinedUsersInputSchemaObject } from './CompetitionUncheckedCreateWithoutJoinedUsersInput.schema';
import { CompetitionCreateOrConnectWithoutJoinedUsersInputSchemaObject } from './CompetitionCreateOrConnectWithoutJoinedUsersInput.schema';
import { CompetitionWhereUniqueInputSchemaObject } from './CompetitionWhereUniqueInput.schema'

export const CompetitionCreateNestedOneWithoutJoinedUsersInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(CompetitionCreateWithoutJoinedUsersInputSchemaObject),
Joi.object().keys(CompetitionUncheckedCreateWithoutJoinedUsersInputSchemaObject)),
  connectOrCreate: Joi.object().keys(CompetitionCreateOrConnectWithoutJoinedUsersInputSchemaObject),
  connect: Joi.object().keys(CompetitionWhereUniqueInputSchemaObject)
}