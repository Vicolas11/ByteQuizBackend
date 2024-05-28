import Joi from "joi";

export const RegisterInputSchema = Joi.object({
  email: Joi.string().email().min(3).required(),
  password: Joi.string().required(),
  username: Joi.string().min(2).required(),
  gender: Joi.string().valid("Male", "Female").required(),
});

export const ChangeInputSchema = Joi.object({
  id: Joi.string().guid({ version: "uuidv4" }).required(),
  newpassword: Joi.string().min(6).required(),
  oldpassword: Joi.string().required(),
});

export const AccountInputSchema = Joi.object({
  id: Joi.string().guid({ version: "uuidv4" }).required(),
  username: Joi.string().min(2).required(),
});
