// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutQuizInputSchemaObject } from './UserCreateWithoutQuizInput.schema';
import { UserUncheckedCreateWithoutQuizInputSchemaObject } from './UserUncheckedCreateWithoutQuizInput.schema';
import { UserCreateOrConnectWithoutQuizInputSchemaObject } from './UserCreateOrConnectWithoutQuizInput.schema';
import { UserUpsertWithoutQuizInputSchemaObject } from './UserUpsertWithoutQuizInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutQuizInputSchemaObject } from './UserUpdateWithoutQuizInput.schema';
import { UserUncheckedUpdateWithoutQuizInputSchemaObject } from './UserUncheckedUpdateWithoutQuizInput.schema'

export const UserUpdateOneRequiredWithoutQuizNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutQuizInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutQuizInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutQuizInputSchemaObject),
  upsert: Joi.object().keys(UserUpsertWithoutQuizInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutQuizInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutQuizInputSchemaObject))
}