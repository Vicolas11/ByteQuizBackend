// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutLogoutTokenInputSchemaObject } from './UserCreateWithoutLogoutTokenInput.schema';
import { UserUncheckedCreateWithoutLogoutTokenInputSchemaObject } from './UserUncheckedCreateWithoutLogoutTokenInput.schema';
import { UserCreateOrConnectWithoutLogoutTokenInputSchemaObject } from './UserCreateOrConnectWithoutLogoutTokenInput.schema';
import { UserUpsertWithoutLogoutTokenInputSchemaObject } from './UserUpsertWithoutLogoutTokenInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutLogoutTokenInputSchemaObject } from './UserUpdateWithoutLogoutTokenInput.schema';
import { UserUncheckedUpdateWithoutLogoutTokenInputSchemaObject } from './UserUncheckedUpdateWithoutLogoutTokenInput.schema'

export const UserUpdateOneRequiredWithoutLogoutTokenNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutLogoutTokenInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutLogoutTokenInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutLogoutTokenInputSchemaObject),
  upsert: Joi.object().keys(UserUpsertWithoutLogoutTokenInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutLogoutTokenInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutLogoutTokenInputSchemaObject))
}