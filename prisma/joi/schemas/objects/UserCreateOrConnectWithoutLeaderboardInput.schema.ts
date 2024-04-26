// @ts-nocheck
import Joi from 'joi';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutLeaderboardInputSchemaObject } from './UserCreateWithoutLeaderboardInput.schema';
import { UserUncheckedCreateWithoutLeaderboardInputSchemaObject } from './UserUncheckedCreateWithoutLeaderboardInput.schema'

export const UserCreateOrConnectWithoutLeaderboardInputSchemaObject = {
    where: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutLeaderboardInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutLeaderboardInputSchemaObject))
}