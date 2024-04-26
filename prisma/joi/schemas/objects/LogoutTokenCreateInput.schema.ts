// @ts-nocheck
import Joi from 'joi';
import { UserCreateNestedOneWithoutLogoutTokenInputSchemaObject } from './UserCreateNestedOneWithoutLogoutTokenInput.schema'

export const LogoutTokenCreateInputSchemaObject = {
    id: Joi.string(),
  token: Joi.string().required(),
  user: Joi.object().keys(UserCreateNestedOneWithoutLogoutTokenInputSchemaObject)
}