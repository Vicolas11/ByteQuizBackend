// @ts-nocheck
import Joi from 'joi';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutCreatedCompetitionsInputSchemaObject } from './UserCreateWithoutCreatedCompetitionsInput.schema';
import { UserUncheckedCreateWithoutCreatedCompetitionsInputSchemaObject } from './UserUncheckedCreateWithoutCreatedCompetitionsInput.schema'

export const UserCreateOrConnectWithoutCreatedCompetitionsInputSchemaObject = {
    where: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutCreatedCompetitionsInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutCreatedCompetitionsInputSchemaObject))
}