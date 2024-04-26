// @ts-nocheck
import Joi from 'joi';
import { StringWithAggregatesFilterSchemaObject } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterSchemaObject } from './BoolWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterSchemaObject } from './StringNullableWithAggregatesFilter.schema'

export const OptionScalarWhereWithAggregatesInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#OptionScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#OptionScalarWhereWithAggregatesInput'))),
  OR: Joi.array().items(Joi.link('#OptionScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(Joi.link('#OptionScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#OptionScalarWhereWithAggregatesInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  value: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  label: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  isCorrect: Joi.alternatives().try(Joi.object().keys(BoolWithAggregatesFilterSchemaObject),
Joi.boolean()),
  isSelected: Joi.alternatives().try(Joi.object().keys(BoolWithAggregatesFilterSchemaObject),
Joi.boolean()),
  questionId: Joi.alternatives().try(Joi.object().keys(StringNullableWithAggregatesFilterSchemaObject),
Joi.string())
}