// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { StringNullableFilterSchemaObject } from './StringNullableFilter.schema';
import { UserRelationFilterSchemaObject } from './UserRelationFilter.schema';
import { UserWhereInputSchemaObject } from './UserWhereInput.schema';
import { CompetitionRelationFilterSchemaObject } from './CompetitionRelationFilter.schema';
import { CompetitionWhereInputSchemaObject } from './CompetitionWhereInput.schema'

export const LeaderboardWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#LeaderboardWhereInput'),
Joi.array().items(Joi.link('#LeaderboardWhereInput'))),
  OR: Joi.array().items(Joi.link('#LeaderboardWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#LeaderboardWhereInput'),
Joi.array().items(Joi.link('#LeaderboardWhereInput'))),
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
Joi.string()),
  user: Joi.alternatives().try(Joi.object().keys(UserRelationFilterSchemaObject),
Joi.object().keys(UserWhereInputSchemaObject)),
  Competition: Joi.alternatives().try(Joi.object().keys(CompetitionRelationFilterSchemaObject),
Joi.object().keys(CompetitionWhereInputSchemaObject))
}