// @ts-nocheck
import Joi from 'joi';
import { UserUpdateWithoutAchievementInputSchemaObject } from './UserUpdateWithoutAchievementInput.schema';
import { UserUncheckedUpdateWithoutAchievementInputSchemaObject } from './UserUncheckedUpdateWithoutAchievementInput.schema';
import { UserCreateWithoutAchievementInputSchemaObject } from './UserCreateWithoutAchievementInput.schema';
import { UserUncheckedCreateWithoutAchievementInputSchemaObject } from './UserUncheckedCreateWithoutAchievementInput.schema'

export const UserUpsertWithoutAchievementInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutAchievementInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutAchievementInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutAchievementInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutAchievementInputSchemaObject))
}