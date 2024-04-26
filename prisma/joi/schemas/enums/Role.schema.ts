import Joi from 'joi';

export const RoleSchema = Joi.string().valid(...["admin","user"])