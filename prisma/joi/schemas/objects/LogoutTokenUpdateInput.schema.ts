// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutLogoutTokenNestedInputSchemaObject } from './UserUpdateOneRequiredWithoutLogoutTokenNestedInput.schema'

export const LogoutTokenUpdateInputSchemaObject = {
    token: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  user: Joi.object().keys(UserUpdateOneRequiredWithoutLogoutTokenNestedInputSchemaObject)
}