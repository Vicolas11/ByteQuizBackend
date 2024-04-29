// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { StringNullableFilterSchemaObject } from './StringNullableFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema'

export const AchievementScalarWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#AchievementScalarWhereInput'),
Joi.array().items(Joi.link('#AchievementScalarWhereInput'))),
  OR: Joi.array().items(Joi.link('#AchievementScalarWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#AchievementScalarWhereInput'),
Joi.array().items(Joi.link('#AchievementScalarWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  title: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  medalImg: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  userId: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject))
}