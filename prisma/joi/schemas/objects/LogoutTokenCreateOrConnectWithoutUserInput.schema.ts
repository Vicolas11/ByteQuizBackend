// @ts-nocheck
import Joi from 'joi';
import { LogoutTokenWhereUniqueInputSchemaObject } from './LogoutTokenWhereUniqueInput.schema';
import { LogoutTokenCreateWithoutUserInputSchemaObject } from './LogoutTokenCreateWithoutUserInput.schema';
import { LogoutTokenUncheckedCreateWithoutUserInputSchemaObject } from './LogoutTokenUncheckedCreateWithoutUserInput.schema'

export const LogoutTokenCreateOrConnectWithoutUserInputSchemaObject = {
    where: Joi.object().keys(LogoutTokenWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(LogoutTokenCreateWithoutUserInputSchemaObject),
Joi.object().keys(LogoutTokenUncheckedCreateWithoutUserInputSchemaObject))
}