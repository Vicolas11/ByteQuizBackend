// @ts-nocheck
import Joi from 'joi';
import { UserUpdateWithoutLogoutTokenInputSchemaObject } from './UserUpdateWithoutLogoutTokenInput.schema';
import { UserUncheckedUpdateWithoutLogoutTokenInputSchemaObject } from './UserUncheckedUpdateWithoutLogoutTokenInput.schema';
import { UserCreateWithoutLogoutTokenInputSchemaObject } from './UserCreateWithoutLogoutTokenInput.schema';
import { UserUncheckedCreateWithoutLogoutTokenInputSchemaObject } from './UserUncheckedCreateWithoutLogoutTokenInput.schema'

export const UserUpsertWithoutLogoutTokenInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutLogoutTokenInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutLogoutTokenInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutLogoutTokenInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutLogoutTokenInputSchemaObject))
}