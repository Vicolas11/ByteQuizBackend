// @ts-nocheck
import Joi from 'joi';
import { LogoutTokenWhereUniqueInputSchemaObject } from './LogoutTokenWhereUniqueInput.schema';
import { LogoutTokenUpdateWithoutUserInputSchemaObject } from './LogoutTokenUpdateWithoutUserInput.schema';
import { LogoutTokenUncheckedUpdateWithoutUserInputSchemaObject } from './LogoutTokenUncheckedUpdateWithoutUserInput.schema'

export const LogoutTokenUpdateWithWhereUniqueWithoutUserInputSchemaObject = {
    where: Joi.object().keys(LogoutTokenWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(LogoutTokenUpdateWithoutUserInputSchemaObject),
Joi.object().keys(LogoutTokenUncheckedUpdateWithoutUserInputSchemaObject))
}