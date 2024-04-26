// @ts-nocheck
import Joi from 'joi';
import { QuestionCreateNestedOneWithoutOptionsInputSchemaObject } from './QuestionCreateNestedOneWithoutOptionsInput.schema'

export const OptionCreateInputSchemaObject = {
    id: Joi.string(),
  value: Joi.string().required(),
  label: Joi.string().required(),
  isCorrect: Joi.boolean().required(),
  isSelected: Joi.boolean(),
  Question: Joi.object().keys(QuestionCreateNestedOneWithoutOptionsInputSchemaObject)
}