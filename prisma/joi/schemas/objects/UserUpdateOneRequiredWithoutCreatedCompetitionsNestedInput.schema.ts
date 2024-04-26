// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutCreatedCompetitionsInputSchemaObject } from './UserCreateWithoutCreatedCompetitionsInput.schema';
import { UserUncheckedCreateWithoutCreatedCompetitionsInputSchemaObject } from './UserUncheckedCreateWithoutCreatedCompetitionsInput.schema';
import { UserCreateOrConnectWithoutCreatedCompetitionsInputSchemaObject } from './UserCreateOrConnectWithoutCreatedCompetitionsInput.schema';
import { UserUpsertWithoutCreatedCompetitionsInputSchemaObject } from './UserUpsertWithoutCreatedCompetitionsInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutCreatedCompetitionsInputSchemaObject } from './UserUpdateWithoutCreatedCompetitionsInput.schema';
import { UserUncheckedUpdateWithoutCreatedCompetitionsInputSchemaObject } from './UserUncheckedUpdateWithoutCreatedCompetitionsInput.schema'

export const UserUpdateOneRequiredWithoutCreatedCompetitionsNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutCreatedCompetitionsInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutCreatedCompetitionsInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutCreatedCompetitionsInputSchemaObject),
  upsert: Joi.object().keys(UserUpsertWithoutCreatedCompetitionsInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutCreatedCompetitionsInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutCreatedCompetitionsInputSchemaObject))
}