// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { BoolFilterSchemaObject } from './BoolFilter.schema'

export const QuizScalarWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#QuizScalarWhereInput'),
Joi.array().items(Joi.link('#QuizScalarWhereInput'))),
  OR: Joi.array().items(Joi.link('#QuizScalarWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#QuizScalarWhereInput'),
Joi.array().items(Joi.link('#QuizScalarWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  totalPoint: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  overallPoint: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  userId: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  hasSubmitted: Joi.alternatives().try(Joi.object().keys(BoolFilterSchemaObject),
Joi.boolean())
}