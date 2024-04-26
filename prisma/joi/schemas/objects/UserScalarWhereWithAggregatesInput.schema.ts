// @ts-nocheck
import Joi from 'joi';
import { StringWithAggregatesFilterSchemaObject } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterSchemaObject } from './StringNullableWithAggregatesFilter.schema';
import { EnumGenderWithAggregatesFilterSchemaObject } from './EnumGenderWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterSchemaObject } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterSchemaObject } from './DateTimeWithAggregatesFilter.schema';
import { IntWithAggregatesFilterSchemaObject } from './IntWithAggregatesFilter.schema';
import { EnumRoleWithAggregatesFilterSchemaObject } from './EnumRoleWithAggregatesFilter.schema'

export const UserScalarWhereWithAggregatesInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#UserScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#UserScalarWhereWithAggregatesInput'))),
  OR: Joi.array().items(Joi.link('#UserScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(Joi.link('#UserScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#UserScalarWhereWithAggregatesInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  email: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  username: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  password: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  avatar: Joi.alternatives().try(Joi.object().keys(StringNullableWithAggregatesFilterSchemaObject),
Joi.string()),
  gender: Joi.alternatives().try(Joi.object().keys(EnumGenderWithAggregatesFilterSchemaObject)),
  isFirstTime: Joi.alternatives().try(Joi.object().keys(BoolWithAggregatesFilterSchemaObject),
Joi.boolean()),
  createAt: Joi.alternatives().try(Joi.object().keys(DateTimeWithAggregatesFilterSchemaObject)),
  highScore: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject),
Joi.number()),
  role: Joi.alternatives().try(Joi.object().keys(EnumRoleWithAggregatesFilterSchemaObject))
}