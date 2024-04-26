// @ts-nocheck
import Joi from 'joi';
import { QuizUncheckedCreateNestedManyWithoutUserInputSchemaObject } from './QuizUncheckedCreateNestedManyWithoutUserInput.schema';
import { LeaderboardUncheckedCreateNestedManyWithoutUserInputSchemaObject } from './LeaderboardUncheckedCreateNestedManyWithoutUserInput.schema';
import { AchievementUncheckedCreateNestedManyWithoutUserInputSchemaObject } from './AchievementUncheckedCreateNestedManyWithoutUserInput.schema';
import { CompetitionToUserUncheckedCreateNestedManyWithoutUserInputSchemaObject } from './CompetitionToUserUncheckedCreateNestedManyWithoutUserInput.schema';
import { LogoutTokenUncheckedCreateNestedManyWithoutUserInputSchemaObject } from './LogoutTokenUncheckedCreateNestedManyWithoutUserInput.schema'

export const UserUncheckedCreateWithoutCreatedCompetitionsInputSchemaObject = {
    id: Joi.string(),
  email: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  avatar: Joi.alternatives().try(Joi.string()),
  isFirstTime: Joi.boolean(),
  createAt: Joi.date(),
  highScore: Joi.number(),
  Quiz: Joi.object().keys(QuizUncheckedCreateNestedManyWithoutUserInputSchemaObject),
  Leaderboard: Joi.object().keys(LeaderboardUncheckedCreateNestedManyWithoutUserInputSchemaObject),
  achievement: Joi.object().keys(AchievementUncheckedCreateNestedManyWithoutUserInputSchemaObject),
  joinedCompetitions: Joi.object().keys(CompetitionToUserUncheckedCreateNestedManyWithoutUserInputSchemaObject),
  LogoutToken: Joi.object().keys(LogoutTokenUncheckedCreateNestedManyWithoutUserInputSchemaObject)
}