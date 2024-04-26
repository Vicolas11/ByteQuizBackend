// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutLeaderboardInputSchemaObject } from './UserCreateWithoutLeaderboardInput.schema';
import { UserUncheckedCreateWithoutLeaderboardInputSchemaObject } from './UserUncheckedCreateWithoutLeaderboardInput.schema';
import { UserCreateOrConnectWithoutLeaderboardInputSchemaObject } from './UserCreateOrConnectWithoutLeaderboardInput.schema';
import { UserUpsertWithoutLeaderboardInputSchemaObject } from './UserUpsertWithoutLeaderboardInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutLeaderboardInputSchemaObject } from './UserUpdateWithoutLeaderboardInput.schema';
import { UserUncheckedUpdateWithoutLeaderboardInputSchemaObject } from './UserUncheckedUpdateWithoutLeaderboardInput.schema'

export const UserUpdateOneRequiredWithoutLeaderboardNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutLeaderboardInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutLeaderboardInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutLeaderboardInputSchemaObject),
  upsert: Joi.object().keys(UserUpsertWithoutLeaderboardInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutLeaderboardInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutLeaderboardInputSchemaObject))
}