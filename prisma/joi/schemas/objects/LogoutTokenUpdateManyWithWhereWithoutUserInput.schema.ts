// @ts-nocheck
import Joi from 'joi';
import { LogoutTokenScalarWhereInputSchemaObject } from './LogoutTokenScalarWhereInput.schema';
import { LogoutTokenUpdateManyMutationInputSchemaObject } from './LogoutTokenUpdateManyMutationInput.schema';
import { LogoutTokenUncheckedUpdateManyWithoutLogoutTokenInputSchemaObject } from './LogoutTokenUncheckedUpdateManyWithoutLogoutTokenInput.schema'

export const LogoutTokenUpdateManyWithWhereWithoutUserInputSchemaObject = {
    where: Joi.object().keys(LogoutTokenScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(LogoutTokenUpdateManyMutationInputSchemaObject),
Joi.object().keys(LogoutTokenUncheckedUpdateManyWithoutLogoutTokenInputSchemaObject))
}