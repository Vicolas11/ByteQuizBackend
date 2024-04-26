import Joi from 'joi';

export const OptionScalarFieldEnumSchema = Joi.string().valid(...["id","value","label","isCorrect","isSelected","questionId"])