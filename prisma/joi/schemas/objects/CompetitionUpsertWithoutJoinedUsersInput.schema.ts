// @ts-nocheck
import Joi from 'joi';
import { CompetitionUpdateWithoutJoinedUsersInputSchemaObject } from './CompetitionUpdateWithoutJoinedUsersInput.schema';
import { CompetitionUncheckedUpdateWithoutJoinedUsersInputSchemaObject } from './CompetitionUncheckedUpdateWithoutJoinedUsersInput.schema';
import { CompetitionCreateWithoutJoinedUsersInputSchemaObject } from './CompetitionCreateWithoutJoinedUsersInput.schema';
import { CompetitionUncheckedCreateWithoutJoinedUsersInputSchemaObject } from './CompetitionUncheckedCreateWithoutJoinedUsersInput.schema'

export const CompetitionUpsertWithoutJoinedUsersInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(CompetitionUpdateWithoutJoinedUsersInputSchemaObject),
Joi.object().keys(CompetitionUncheckedUpdateWithoutJoinedUsersInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(CompetitionCreateWithoutJoinedUsersInputSchemaObject),
Joi.object().keys(CompetitionUncheckedCreateWithoutJoinedUsersInputSchemaObject))
}