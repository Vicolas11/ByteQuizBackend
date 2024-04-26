// @ts-nocheck
import Joi from 'joi';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutJoinedCompetitionsInputSchemaObject } from './UserCreateWithoutJoinedCompetitionsInput.schema';
import { UserUncheckedCreateWithoutJoinedCompetitionsInputSchemaObject } from './UserUncheckedCreateWithoutJoinedCompetitionsInput.schema'

export const UserCreateOrConnectWithoutJoinedCompetitionsInputSchemaObject = {
    where: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutJoinedCompetitionsInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutJoinedCompetitionsInputSchemaObject))
}