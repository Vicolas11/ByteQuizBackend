// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutLeaderboardInputSchemaObject } from './UserCreateWithoutLeaderboardInput.schema';
import { UserUncheckedCreateWithoutLeaderboardInputSchemaObject } from './UserUncheckedCreateWithoutLeaderboardInput.schema';
import { UserCreateOrConnectWithoutLeaderboardInputSchemaObject } from './UserCreateOrConnectWithoutLeaderboardInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutLeaderboardInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutLeaderboardInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutLeaderboardInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutLeaderboardInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject)
}