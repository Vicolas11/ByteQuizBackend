// @ts-nocheck
import Joi from 'joi';
import { StringWithAggregatesFilterSchemaObject } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterSchemaObject } from './IntWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterSchemaObject } from './BoolWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterSchemaObject } from './StringNullableWithAggregatesFilter.schema'

export const QuestionScalarWhereWithAggregatesInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#QuestionScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#QuestionScalarWhereWithAggregatesInput'))),
  OR: Joi.array().items(Joi.link('#QuestionScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(Joi.link('#QuestionScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#QuestionScalarWhereWithAggregatesInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  question: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  score: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject),
Joi.number()),
  time: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject),
Joi.number()),
  point: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject),
Joi.number()),
  isAnswered: Joi.alternatives().try(Joi.object().keys(BoolWithAggregatesFilterSchemaObject),
Joi.boolean()),
  isCompleted: Joi.alternatives().try(Joi.object().keys(BoolWithAggregatesFilterSchemaObject),
Joi.boolean()),
  competitionId: Joi.alternatives().try(Joi.object().keys(StringNullableWithAggregatesFilterSchemaObject),
Joi.string()),
  quizId: Joi.alternatives().try(Joi.object().keys(StringNullableWithAggregatesFilterSchemaObject),
Joi.string())
}