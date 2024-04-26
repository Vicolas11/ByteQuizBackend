// @ts-nocheck
import Joi from 'joi';
import { UserUpdateWithoutJoinedCompetitionsInputSchemaObject } from './UserUpdateWithoutJoinedCompetitionsInput.schema';
import { UserUncheckedUpdateWithoutJoinedCompetitionsInputSchemaObject } from './UserUncheckedUpdateWithoutJoinedCompetitionsInput.schema';
import { UserCreateWithoutJoinedCompetitionsInputSchemaObject } from './UserCreateWithoutJoinedCompetitionsInput.schema';
import { UserUncheckedCreateWithoutJoinedCompetitionsInputSchemaObject } from './UserUncheckedCreateWithoutJoinedCompetitionsInput.schema'

export const UserUpsertWithoutJoinedCompetitionsInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutJoinedCompetitionsInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutJoinedCompetitionsInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutJoinedCompetitionsInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutJoinedCompetitionsInputSchemaObject))
}