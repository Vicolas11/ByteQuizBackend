// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutJoinedCompetitionsInputSchemaObject } from './UserCreateWithoutJoinedCompetitionsInput.schema';
import { UserUncheckedCreateWithoutJoinedCompetitionsInputSchemaObject } from './UserUncheckedCreateWithoutJoinedCompetitionsInput.schema';
import { UserCreateOrConnectWithoutJoinedCompetitionsInputSchemaObject } from './UserCreateOrConnectWithoutJoinedCompetitionsInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutJoinedCompetitionsInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutJoinedCompetitionsInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutJoinedCompetitionsInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutJoinedCompetitionsInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject)
}