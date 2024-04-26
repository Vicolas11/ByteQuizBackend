// @ts-nocheck
import Joi from 'joi';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutAchievementInputSchemaObject } from './UserCreateWithoutAchievementInput.schema';
import { UserUncheckedCreateWithoutAchievementInputSchemaObject } from './UserUncheckedCreateWithoutAchievementInput.schema'

export const UserCreateOrConnectWithoutAchievementInputSchemaObject = {
    where: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutAchievementInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutAchievementInputSchemaObject))
}