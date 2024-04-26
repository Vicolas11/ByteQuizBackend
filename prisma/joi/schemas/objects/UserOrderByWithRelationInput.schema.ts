// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputSchemaObject } from './SortOrderInput.schema';
import { QuizOrderByRelationAggregateInputSchemaObject } from './QuizOrderByRelationAggregateInput.schema';
import { LeaderboardOrderByRelationAggregateInputSchemaObject } from './LeaderboardOrderByRelationAggregateInput.schema';
import { AchievementOrderByRelationAggregateInputSchemaObject } from './AchievementOrderByRelationAggregateInput.schema';
import { CompetitionOrderByRelationAggregateInputSchemaObject } from './CompetitionOrderByRelationAggregateInput.schema';
import { CompetitionToUserOrderByRelationAggregateInputSchemaObject } from './CompetitionToUserOrderByRelationAggregateInput.schema';
import { LogoutTokenOrderByRelationAggregateInputSchemaObject } from './LogoutTokenOrderByRelationAggregateInput.schema'

export const UserOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  email: SortOrderSchema,
  username: SortOrderSchema,
  password: SortOrderSchema,
  avatar: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  gender: SortOrderSchema,
  isFirstTime: SortOrderSchema,
  createAt: SortOrderSchema,
  highScore: SortOrderSchema,
  role: SortOrderSchema,
  Quiz: Joi.object().keys(QuizOrderByRelationAggregateInputSchemaObject),
  Leaderboard: Joi.object().keys(LeaderboardOrderByRelationAggregateInputSchemaObject),
  achievement: Joi.object().keys(AchievementOrderByRelationAggregateInputSchemaObject),
  createdCompetitions: Joi.object().keys(CompetitionOrderByRelationAggregateInputSchemaObject),
  joinedCompetitions: Joi.object().keys(CompetitionToUserOrderByRelationAggregateInputSchemaObject),
  LogoutToken: Joi.object().keys(LogoutTokenOrderByRelationAggregateInputSchemaObject)
}