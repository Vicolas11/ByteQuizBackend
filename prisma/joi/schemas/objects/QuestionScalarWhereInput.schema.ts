// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { BoolFilterSchemaObject } from './BoolFilter.schema';
import { StringNullableFilterSchemaObject } from './StringNullableFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema'

export const QuestionScalarWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#QuestionScalarWhereInput'),
Joi.array().items(Joi.link('#QuestionScalarWhereInput'))),
  OR: Joi.array().items(Joi.link('#QuestionScalarWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#QuestionScalarWhereInput'),
Joi.array().items(Joi.link('#QuestionScalarWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  question: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  score: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  time: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  point: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  isAnswered: Joi.alternatives().try(Joi.object().keys(BoolFilterSchemaObject),
Joi.boolean()),
  isCompleted: Joi.alternatives().try(Joi.object().keys(BoolFilterSchemaObject),
Joi.boolean()),
  competitionId: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string()),
  quizId: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  userId: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string())
}