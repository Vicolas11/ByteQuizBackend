// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { BoolFilterSchemaObject } from './BoolFilter.schema';
import { StringNullableFilterSchemaObject } from './StringNullableFilter.schema';
import { QuestionRelationFilterSchemaObject } from './QuestionRelationFilter.schema';
import { QuestionWhereInputSchemaObject } from './QuestionWhereInput.schema'

export const OptionWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#OptionWhereInput'),
Joi.array().items(Joi.link('#OptionWhereInput'))),
  OR: Joi.array().items(Joi.link('#OptionWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#OptionWhereInput'),
Joi.array().items(Joi.link('#OptionWhereInput'))),
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
Joi.string()),
  Question: Joi.alternatives().try(Joi.object().keys(QuestionRelationFilterSchemaObject),
Joi.object().keys(QuestionWhereInputSchemaObject))
}