// @ts-nocheck
import Joi from 'joi';
import { UserUpdateWithoutCreatedCompetitionsInputSchemaObject } from './UserUpdateWithoutCreatedCompetitionsInput.schema';
import { UserUncheckedUpdateWithoutCreatedCompetitionsInputSchemaObject } from './UserUncheckedUpdateWithoutCreatedCompetitionsInput.schema';
import { UserCreateWithoutCreatedCompetitionsInputSchemaObject } from './UserCreateWithoutCreatedCompetitionsInput.schema';
import { UserUncheckedCreateWithoutCreatedCompetitionsInputSchemaObject } from './UserUncheckedCreateWithoutCreatedCompetitionsInput.schema'

export const UserUpsertWithoutCreatedCompetitionsInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutCreatedCompetitionsInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutCreatedCompetitionsInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutCreatedCompetitionsInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutCreatedCompetitionsInputSchemaObject))
}