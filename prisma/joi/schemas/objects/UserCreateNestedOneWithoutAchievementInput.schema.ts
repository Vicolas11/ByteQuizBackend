// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutAchievementInputSchemaObject } from './UserCreateWithoutAchievementInput.schema';
import { UserUncheckedCreateWithoutAchievementInputSchemaObject } from './UserUncheckedCreateWithoutAchievementInput.schema';
import { UserCreateOrConnectWithoutAchievementInputSchemaObject } from './UserCreateOrConnectWithoutAchievementInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutAchievementInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutAchievementInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutAchievementInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutAchievementInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject)
}