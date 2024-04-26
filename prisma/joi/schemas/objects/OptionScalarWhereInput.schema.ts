// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { BoolFilterSchemaObject } from './BoolFilter.schema';
import { StringNullableFilterSchemaObject } from './StringNullableFilter.schema'

export const OptionScalarWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#OptionScalarWhereInput'),
Joi.array().items(Joi.link('#OptionScalarWhereInput'))),
  OR: Joi.array().items(Joi.link('#OptionScalarWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#OptionScalarWhereInput'),
Joi.array().items(Joi.link('#OptionScalarWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  value: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  label: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  isCorrect: Joi.alternatives().try(Joi.object().keys(BoolFilterSchemaObject),
Joi.boolean()),
  isSelected: Joi.alternatives().try(Joi.object().keys(BoolFilterSchemaObject),
Joi.boolean()),
  questionId: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string())
}