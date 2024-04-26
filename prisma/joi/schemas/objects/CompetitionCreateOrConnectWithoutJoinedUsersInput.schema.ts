// @ts-nocheck
import Joi from 'joi';
import { CompetitionWhereUniqueInputSchemaObject } from './CompetitionWhereUniqueInput.schema';
import { CompetitionCreateWithoutJoinedUsersInputSchemaObject } from './CompetitionCreateWithoutJoinedUsersInput.schema';
import { CompetitionUncheckedCreateWithoutJoinedUsersInputSchemaObject } from './CompetitionUncheckedCreateWithoutJoinedUsersInput.schema'

export const CompetitionCreateOrConnectWithoutJoinedUsersInputSchemaObject = {
    where: Joi.object().keys(CompetitionWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(CompetitionCreateWithoutJoinedUsersInputSchemaObject),
Joi.object().keys(CompetitionUncheckedCreateWithoutJoinedUsersInputSchemaObject))
}