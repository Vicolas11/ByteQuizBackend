// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema'

export const CompetitionScalarWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#CompetitionScalarWhereInput'),
Joi.array().items(Joi.link('#CompetitionScalarWhereInput'))),
  OR: Joi.array().items(Joi.link('#CompetitionScalarWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#CompetitionScalarWhereInput'),
Joi.array().items(Joi.link('#CompetitionScalarWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  title: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  subtitle: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  imgCover: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  price: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  point: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  totalPoint: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  overallPoint: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  createdUserId: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string())
}