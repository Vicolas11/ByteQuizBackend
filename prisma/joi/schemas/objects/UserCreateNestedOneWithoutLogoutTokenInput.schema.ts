// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutLogoutTokenInputSchemaObject } from './UserCreateWithoutLogoutTokenInput.schema';
import { UserUncheckedCreateWithoutLogoutTokenInputSchemaObject } from './UserUncheckedCreateWithoutLogoutTokenInput.schema';
import { UserCreateOrConnectWithoutLogoutTokenInputSchemaObject } from './UserCreateOrConnectWithoutLogoutTokenInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutLogoutTokenInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutLogoutTokenInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutLogoutTokenInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutLogoutTokenInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject)
}