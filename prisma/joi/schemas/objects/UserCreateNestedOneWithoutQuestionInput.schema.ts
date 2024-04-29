// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutQuestionInputSchemaObject } from './UserCreateWithoutQuestionInput.schema';
import { UserUncheckedCreateWithoutQuestionInputSchemaObject } from './UserUncheckedCreateWithoutQuestionInput.schema';
import { UserCreateOrConnectWithoutQuestionInputSchemaObject } from './UserCreateOrConnectWithoutQuestionInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutQuestionInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutQuestionInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutQuestionInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutQuestionInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject)
}