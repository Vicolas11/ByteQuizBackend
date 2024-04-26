import Joi from "joi";

export const RegisterInputSchema = Joi.object({
  email: Joi.string().email().min(3).required(),
  password: Joi.string().required(),
  username: Joi.string().min(2).required(),
  gender: Joi.string().valid("Male", "Female").required(),
});
