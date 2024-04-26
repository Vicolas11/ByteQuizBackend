// @ts-nocheck
import Joi from 'joi';
import { LogoutTokenWhereUniqueInputSchemaObject } from './LogoutTokenWhereUniqueInput.schema';
import { LogoutTokenUpdateWithoutUserInputSchemaObject } from './LogoutTokenUpdateWithoutUserInput.schema';
import { LogoutTokenUncheckedUpdateWithoutUserInputSchemaObject } from './LogoutTokenUncheckedUpdateWithoutUserInput.schema';
import { LogoutTokenCreateWithoutUserInputSchemaObject } from './LogoutTokenCreateWithoutUserInput.schema';
import { LogoutTokenUncheckedCreateWithoutUserInputSchemaObject } from './LogoutTokenUncheckedCreateWithoutUserInput.schema'

export const LogoutTokenUpsertWithWhereUniqueWithoutUserInputSchemaObject = {
    where: Joi.object().keys(LogoutTokenWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(LogoutTokenUpdateWithoutUserInputSchemaObject),
Joi.object().keys(LogoutTokenUncheckedUpdateWithoutUserInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(LogoutTokenCreateWithoutUserInputSchemaObject),
Joi.object().keys(LogoutTokenUncheckedCreateWithoutUserInputSchemaObject))
}