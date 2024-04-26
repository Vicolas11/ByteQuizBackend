// @ts-nocheck
import Joi from 'joi';


export const LogoutTokenUncheckedCreateWithoutUserInputSchemaObject = {
    id: Joi.string(),
  token: Joi.string().required()
}