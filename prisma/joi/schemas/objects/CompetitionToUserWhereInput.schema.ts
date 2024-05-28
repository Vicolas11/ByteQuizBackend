// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { BoolFilterSchemaObject } from './BoolFilter.schema';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { UserRelationFilterSchemaObject } from './UserRelationFilter.schema';
import { UserWhereInputSchemaObject } from './UserWhereInput.schema';
import { CompetitionRelationFilterSchemaObject } from './CompetitionRelationFilter.schema';
import { CompetitionWhereInputSchemaObject } from './CompetitionWhereInput.schema'

export const CompetitionToUserWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#CompetitionToUserWhereInput'),
Joi.array().items(Joi.link('#CompetitionToUserWhereInput'))),
  OR: Joi.array().items(Joi.link('#CompetitionToUserWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#CompetitionToUserWhereInput'),
Joi.array().items(Joi.link('#CompetitionToUserWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  userId: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  competitionId: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  joinedDate: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  hasJoined: Joi.alternatives().try(Joi.object().keys(BoolFilterSchemaObject),
Joi.boolean()),
  hasSubmitted: Joi.alternatives().try(Joi.object().keys(BoolFilterSchemaObject),
Joi.boolean()),
  totalPoint: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  user: Joi.alternatives().try(Joi.object().keys(UserRelationFilterSchemaObject),
Joi.object().keys(UserWhereInputSchemaObject)),
  competition: Joi.alternatives().try(Joi.object().keys(CompetitionRelationFilterSchemaObject),
Joi.object().keys(CompetitionWhereInputSchemaObject))
}