// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutQuestionInputSchemaObject } from './UserCreateWithoutQuestionInput.schema';
import { UserUncheckedCreateWithoutQuestionInputSchemaObject } from './UserUncheckedCreateWithoutQuestionInput.schema';
import { UserCreateOrConnectWithoutQuestionInputSchemaObject } from './UserCreateOrConnectWithoutQuestionInput.schema';
import { UserUpsertWithoutQuestionInputSchemaObject } from './UserUpsertWithoutQuestionInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutQuestionInputSchemaObject } from './UserUpdateWithoutQuestionInput.schema';
import { UserUncheckedUpdateWithoutQuestionInputSchemaObject } from './UserUncheckedUpdateWithoutQuestionInput.schema'

export const UserUpdateOneWithoutQuestionNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutQuestionInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutQuestionInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutQuestionInputSchemaObject),
  upsert: Joi.object().keys(UserUpsertWithoutQuestionInputSchemaObject),
  disconnect: Joi.boolean(),
  delete: Joi.boolean(),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutQuestionInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutQuestionInputSchemaObject))
}