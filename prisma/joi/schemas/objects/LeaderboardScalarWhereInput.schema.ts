// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { StringNullableFilterSchemaObject } from './StringNullableFilter.schema'

export const LeaderboardScalarWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#LeaderboardScalarWhereInput'),
Joi.array().items(Joi.link('#LeaderboardScalarWhereInput'))),
  OR: Joi.array().items(Joi.link('#LeaderboardScalarWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#LeaderboardScalarWhereInput'),
Joi.array().items(Joi.link('#LeaderboardScalarWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  point: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  position: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  performance: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  userId: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  competitionId: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string())
}