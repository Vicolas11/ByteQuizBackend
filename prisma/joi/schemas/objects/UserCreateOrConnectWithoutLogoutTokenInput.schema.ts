// @ts-nocheck
import Joi from 'joi';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutLogoutTokenInputSchemaObject } from './UserCreateWithoutLogoutTokenInput.schema';
import { UserUncheckedCreateWithoutLogoutTokenInputSchemaObject } from './UserUncheckedCreateWithoutLogoutTokenInput.schema'

export const UserCreateOrConnectWithoutLogoutTokenInputSchemaObject = {
    where: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutLogoutTokenInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutLogoutTokenInputSchemaObject))
}