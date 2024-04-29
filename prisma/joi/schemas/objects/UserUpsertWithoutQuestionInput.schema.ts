// @ts-nocheck
import Joi from 'joi';
import { UserUpdateWithoutQuestionInputSchemaObject } from './UserUpdateWithoutQuestionInput.schema';
import { UserUncheckedUpdateWithoutQuestionInputSchemaObject } from './UserUncheckedUpdateWithoutQuestionInput.schema';
import { UserCreateWithoutQuestionInputSchemaObject } from './UserCreateWithoutQuestionInput.schema';
import { UserUncheckedCreateWithoutQuestionInputSchemaObject } from './UserUncheckedCreateWithoutQuestionInput.schema'

export const UserUpsertWithoutQuestionInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutQuestionInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutQuestionInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutQuestionInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutQuestionInputSchemaObject))
}