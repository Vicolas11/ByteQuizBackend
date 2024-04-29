// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { StringNullableFilterSchemaObject } from './StringNullableFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { UserRelationFilterSchemaObject } from './UserRelationFilter.schema';
import { UserWhereInputSchemaObject } from './UserWhereInput.schema'

export const AchievementWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#AchievementWhereInput'),
Joi.array().items(Joi.link('#AchievementWhereInput'))),
  OR: Joi.array().items(Joi.link('#AchievementWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#AchievementWhereInput'),
Joi.array().items(Joi.link('#AchievementWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  title: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  medalImg: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  userId: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  User: Joi.alternatives().try(Joi.object().keys(UserRelationFilterSchemaObject),
Joi.object().keys(UserWhereInputSchemaObject))
}