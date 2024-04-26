// @ts-nocheck
import Joi from 'joi';
import { QuizCreateNestedManyWithoutUserInputSchemaObject } from './QuizCreateNestedManyWithoutUserInput.schema';
import { LeaderboardCreateNestedManyWithoutUserInputSchemaObject } from './LeaderboardCreateNestedManyWithoutUserInput.schema';
import { AchievementCreateNestedManyWithoutUserInputSchemaObject } from './AchievementCreateNestedManyWithoutUserInput.schema';
import { CompetitionCreateNestedManyWithoutCreatedByInputSchemaObject } from './CompetitionCreateNestedManyWithoutCreatedByInput.schema';
import { LogoutTokenCreateNestedManyWithoutUserInputSchemaObject } from './LogoutTokenCreateNestedManyWithoutUserInput.schema'

export const UserCreateWithoutJoinedCompetitionsInputSchemaObject = {
    id: Joi.string(),
  email: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  avatar: Joi.alternatives().try(Joi.string()),
  isFirstTime: Joi.boolean(),
  createAt: Joi.date(),
  highScore: Joi.number(),
  Quiz: Joi.object().keys(QuizCreateNestedManyWithoutUserInputSchemaObject),
  Leaderboard: Joi.object().keys(LeaderboardCreateNestedManyWithoutUserInputSchemaObject),
  achievement: Joi.object().keys(AchievementCreateNestedManyWithoutUserInputSchemaObject),
  createdCompetitions: Joi.object().keys(CompetitionCreateNestedManyWithoutCreatedByInputSchemaObject),
  LogoutToken: Joi.object().keys(LogoutTokenCreateNestedManyWithoutUserInputSchemaObject)
}