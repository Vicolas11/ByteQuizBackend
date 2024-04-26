// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutCreatedCompetitionsInputSchemaObject } from './UserCreateWithoutCreatedCompetitionsInput.schema';
import { UserUncheckedCreateWithoutCreatedCompetitionsInputSchemaObject } from './UserUncheckedCreateWithoutCreatedCompetitionsInput.schema';
import { UserCreateOrConnectWithoutCreatedCompetitionsInputSchemaObject } from './UserCreateOrConnectWithoutCreatedCompetitionsInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutCreatedCompetitionsInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutCreatedCompetitionsInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutCreatedCompetitionsInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutCreatedCompetitionsInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject)
}