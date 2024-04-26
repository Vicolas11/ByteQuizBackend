import Joi from 'joi';

export const LogoutTokenScalarFieldEnumSchema = Joi.string().valid(...["id","userId","token"])