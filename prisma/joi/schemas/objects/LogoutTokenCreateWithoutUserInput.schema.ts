// @ts-nocheck
import Joi from 'joi';


export const LogoutTokenCreateWithoutUserInputSchemaObject = {
    id: Joi.string(),
  token: Joi.string().required()
}