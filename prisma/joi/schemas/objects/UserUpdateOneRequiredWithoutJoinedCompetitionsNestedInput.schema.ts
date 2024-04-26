// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutJoinedCompetitionsInputSchemaObject } from './UserCreateWithoutJoinedCompetitionsInput.schema';
import { UserUncheckedCreateWithoutJoinedCompetitionsInputSchemaObject } from './UserUncheckedCreateWithoutJoinedCompetitionsInput.schema';
import { UserCreateOrConnectWithoutJoinedCompetitionsInputSchemaObject } from './UserCreateOrConnectWithoutJoinedCompetitionsInput.schema';
import { UserUpsertWithoutJoinedCompetitionsInputSchemaObject } from './UserUpsertWithoutJoinedCompetitionsInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutJoinedCompetitionsInputSchemaObject } from './UserUpdateWithoutJoinedCompetitionsInput.schema';
import { UserUncheckedUpdateWithoutJoinedCompetitionsInputSchemaObject } from './UserUncheckedUpdateWithoutJoinedCompetitionsInput.schema'

export const UserUpdateOneRequiredWithoutJoinedCompetitionsNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutJoinedCompetitionsInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutJoinedCompetitionsInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutJoinedCompetitionsInputSchemaObject),
  upsert: Joi.object().keys(UserUpsertWithoutJoinedCompetitionsInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutJoinedCompetitionsInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutJoinedCompetitionsInputSchemaObject))
}