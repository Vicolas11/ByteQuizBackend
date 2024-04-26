// @ts-nocheck
import Joi from 'joi';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutQuizInputSchemaObject } from './UserCreateWithoutQuizInput.schema';
import { UserUncheckedCreateWithoutQuizInputSchemaObject } from './UserUncheckedCreateWithoutQuizInput.schema'

export const UserCreateOrConnectWithoutQuizInputSchemaObject = {
    where: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutQuizInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutQuizInputSchemaObject))
}