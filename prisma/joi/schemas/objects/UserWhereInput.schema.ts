// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { StringNullableFilterSchemaObject } from './StringNullableFilter.schema';
import { EnumGenderFilterSchemaObject } from './EnumGenderFilter.schema';
import { BoolFilterSchemaObject } from './BoolFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { EnumRoleFilterSchemaObject } from './EnumRoleFilter.schema';
import { QuizListRelationFilterSchemaObject } from './QuizListRelationFilter.schema';
import { LeaderboardListRelationFilterSchemaObject } from './LeaderboardListRelationFilter.schema';
import { AchievementListRelationFilterSchemaObject } from './AchievementListRelationFilter.schema';
import { CompetitionListRelationFilterSchemaObject } from './CompetitionListRelationFilter.schema';
import { CompetitionToUserListRelationFilterSchemaObject } from './CompetitionToUserListRelationFilter.schema';
import { LogoutTokenListRelationFilterSchemaObject } from './LogoutTokenListRelationFilter.schema'

export const UserWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#UserWhereInput'),
Joi.array().items(Joi.link('#UserWhereInput'))),
  OR: Joi.array().items(Joi.link('#UserWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#UserWhereInput'),
Joi.array().items(Joi.link('#UserWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  email: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  username: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  password: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  avatar: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string()),
  gender: Joi.alternatives().try(Joi.object().keys(EnumGenderFilterSchemaObject)),
  isFirstTime: Joi.alternatives().try(Joi.object().keys(BoolFilterSchemaObject),
Joi.boolean()),
  createAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  highScore: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  role: Joi.alternatives().try(Joi.object().keys(EnumRoleFilterSchemaObject)),
  Quiz: Joi.object().keys(QuizListRelationFilterSchemaObject),
  Leaderboard: Joi.object().keys(LeaderboardListRelationFilterSchemaObject),
  achievement: Joi.object().keys(AchievementListRelationFilterSchemaObject),
  createdCompetitions: Joi.object().keys(CompetitionListRelationFilterSchemaObject),
  joinedCompetitions: Joi.object().keys(CompetitionToUserListRelationFilterSchemaObject),
  LogoutToken: Joi.object().keys(LogoutTokenListRelationFilterSchemaObject)
}