// @ts-nocheck
import Joi from 'joi';
import { UserUpdateWithoutLeaderboardInputSchemaObject } from './UserUpdateWithoutLeaderboardInput.schema';
import { UserUncheckedUpdateWithoutLeaderboardInputSchemaObject } from './UserUncheckedUpdateWithoutLeaderboardInput.schema';
import { UserCreateWithoutLeaderboardInputSchemaObject } from './UserCreateWithoutLeaderboardInput.schema';
import { UserUncheckedCreateWithoutLeaderboardInputSchemaObject } from './UserUncheckedCreateWithoutLeaderboardInput.schema'

export const UserUpsertWithoutLeaderboardInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutLeaderboardInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutLeaderboardInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutLeaderboardInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutLeaderboardInputSchemaObject))
}