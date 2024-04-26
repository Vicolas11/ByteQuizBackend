// @ts-nocheck
import Joi from 'joi';
import { UserUpdateWithoutQuizInputSchemaObject } from './UserUpdateWithoutQuizInput.schema';
import { UserUncheckedUpdateWithoutQuizInputSchemaObject } from './UserUncheckedUpdateWithoutQuizInput.schema';
import { UserCreateWithoutQuizInputSchemaObject } from './UserCreateWithoutQuizInput.schema';
import { UserUncheckedCreateWithoutQuizInputSchemaObject } from './UserUncheckedCreateWithoutQuizInput.schema'

export const UserUpsertWithoutQuizInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutQuizInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutQuizInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutQuizInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutQuizInputSchemaObject))
}