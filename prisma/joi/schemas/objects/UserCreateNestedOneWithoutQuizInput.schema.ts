// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutQuizInputSchemaObject } from './UserCreateWithoutQuizInput.schema';
import { UserUncheckedCreateWithoutQuizInputSchemaObject } from './UserUncheckedCreateWithoutQuizInput.schema';
import { UserCreateOrConnectWithoutQuizInputSchemaObject } from './UserCreateOrConnectWithoutQuizInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutQuizInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutQuizInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutQuizInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutQuizInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject)
}