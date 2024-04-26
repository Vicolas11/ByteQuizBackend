// @ts-nocheck
import Joi from 'joi';
import { LeaderboardCreateNestedManyWithoutUserInputSchemaObject } from './LeaderboardCreateNestedManyWithoutUserInput.schema';
import { AchievementCreateNestedManyWithoutUserInputSchemaObject } from './AchievementCreateNestedManyWithoutUserInput.schema';
import { CompetitionCreateNestedManyWithoutCreatedByInputSchemaObject } from './CompetitionCreateNestedManyWithoutCreatedByInput.schema';
import { CompetitionToUserCreateNestedManyWithoutUserInputSchemaObject } from './CompetitionToUserCreateNestedManyWithoutUserInput.schema';
import { LogoutTokenCreateNestedManyWithoutUserInputSchemaObject } from './LogoutTokenCreateNestedManyWithoutUserInput.schema'

export const UserCreateWithoutQuizInputSchemaObject = {
    id: Joi.string(),
  email: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  avatar: Joi.alternatives().try(Joi.string()),
  isFirstTime: Joi.boolean(),
  createAt: Joi.date(),
  highScore: Joi.number(),
  Leaderboard: Joi.object().keys(LeaderboardCreateNestedManyWithoutUserInputSchemaObject),
  achievement: Joi.object().keys(AchievementCreateNestedManyWithoutUserInputSchemaObject),
  createdCompetitions: Joi.object().keys(CompetitionCreateNestedManyWithoutCreatedByInputSchemaObject),
  joinedCompetitions: Joi.object().keys(CompetitionToUserCreateNestedManyWithoutUserInputSchemaObject),
  LogoutToken: Joi.object().keys(LogoutTokenCreateNestedManyWithoutUserInputSchemaObject)
}