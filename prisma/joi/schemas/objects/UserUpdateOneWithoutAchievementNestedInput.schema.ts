// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutAchievementInputSchemaObject } from './UserCreateWithoutAchievementInput.schema';
import { UserUncheckedCreateWithoutAchievementInputSchemaObject } from './UserUncheckedCreateWithoutAchievementInput.schema';
import { UserCreateOrConnectWithoutAchievementInputSchemaObject } from './UserCreateOrConnectWithoutAchievementInput.schema';
import { UserUpsertWithoutAchievementInputSchemaObject } from './UserUpsertWithoutAchievementInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutAchievementInputSchemaObject } from './UserUpdateWithoutAchievementInput.schema';
import { UserUncheckedUpdateWithoutAchievementInputSchemaObject } from './UserUncheckedUpdateWithoutAchievementInput.schema'

export const UserUpdateOneWithoutAchievementNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutAchievementInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutAchievementInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutAchievementInputSchemaObject),
  upsert: Joi.object().keys(UserUpsertWithoutAchievementInputSchemaObject),
  disconnect: Joi.boolean(),
  delete: Joi.boolean(),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutAchievementInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutAchievementInputSchemaObject))
}