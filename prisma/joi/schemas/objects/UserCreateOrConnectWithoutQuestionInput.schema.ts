// @ts-nocheck
import Joi from 'joi';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutQuestionInputSchemaObject } from './UserCreateWithoutQuestionInput.schema';
import { UserUncheckedCreateWithoutQuestionInputSchemaObject } from './UserUncheckedCreateWithoutQuestionInput.schema'

export const UserCreateOrConnectWithoutQuestionInputSchemaObject = {
    where: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutQuestionInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutQuestionInputSchemaObject))
}