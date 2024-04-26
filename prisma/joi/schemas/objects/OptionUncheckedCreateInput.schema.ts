// @ts-nocheck
import Joi from 'joi';


export const OptionUncheckedCreateInputSchemaObject = {
    id: Joi.string(),
  value: Joi.string().required(),
  label: Joi.string().required(),
  isCorrect: Joi.boolean().required(),
  isSelected: Joi.boolean(),
  questionId: Joi.alternatives().try(Joi.string())
}