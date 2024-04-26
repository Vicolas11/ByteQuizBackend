// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { QuestionListRelationFilterSchemaObject } from './QuestionListRelationFilter.schema';
import { LeaderboardListRelationFilterSchemaObject } from './LeaderboardListRelationFilter.schema';
import { UserRelationFilterSchemaObject } from './UserRelationFilter.schema';
import { UserWhereInputSchemaObject } from './UserWhereInput.schema';
import { CompetitionToUserListRelationFilterSchemaObject } from './CompetitionToUserListRelationFilter.schema'

export const CompetitionWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#CompetitionWhereInput'),
Joi.array().items(Joi.link('#CompetitionWhereInput'))),
  OR: Joi.array().items(Joi.link('#CompetitionWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#CompetitionWhereInput'),
Joi.array().items(Joi.link('#CompetitionWhereInput'))),
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
Joi.string()),
  questions: Joi.object().keys(QuestionListRelationFilterSchemaObject),
  leaderboards: Joi.object().keys(LeaderboardListRelationFilterSchemaObject),
  createdBy: Joi.alternatives().try(Joi.object().keys(UserRelationFilterSchemaObject),
Joi.object().keys(UserWhereInputSchemaObject)),
  joinedUsers: Joi.object().keys(CompetitionToUserListRelationFilterSchemaObject)
}