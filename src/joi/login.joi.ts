import Joi from "joi";

export const LoginInputSchema = Joi.object({
  email: Joi.string().min(3).email().required(),
  password: Joi.string().required()
});
