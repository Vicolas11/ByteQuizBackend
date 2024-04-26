// @ts-nocheck
import Joi from 'joi';


export const LogoutTokenCreateManyInputSchemaObject = {
    id: Joi.string(),
  userId: Joi.string().required(),
  token: Joi.string().required()
}