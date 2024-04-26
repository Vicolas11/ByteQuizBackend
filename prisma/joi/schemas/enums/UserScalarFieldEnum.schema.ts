import Joi from 'joi';

export const UserScalarFieldEnumSchema = Joi.string().valid(...["id","email","username","password","avatar","gender","isFirstTime","createAt","highScore","role"])