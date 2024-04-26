// @ts-nocheck
import Joi from 'joi';


export const OptionCreateManyQuestionInputSchemaObject = {
    id: Joi.string(),
  value: Joi.string().required(),
  label: Joi.string().required(),
  isCorrect: Joi.boolean().required(),
  isSelected: Joi.boolean()
}