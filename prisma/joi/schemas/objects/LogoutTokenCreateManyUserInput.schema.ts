// @ts-nocheck
import Joi from 'joi';


export const LogoutTokenCreateManyUserInputSchemaObject = {
    id: Joi.string(),
  token: Joi.string().required()
}