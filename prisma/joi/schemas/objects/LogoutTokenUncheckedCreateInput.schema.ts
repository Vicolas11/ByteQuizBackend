// @ts-nocheck
import Joi from 'joi';


export const LogoutTokenUncheckedCreateInputSchemaObject = {
    id: Joi.string(),
  userId: Joi.string().required(),
  token: Joi.string().required()
}