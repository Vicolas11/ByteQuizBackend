// @ts-nocheck
import Joi from 'joi';
import { QuizCreateNestedManyWithoutUserInputSchemaObject } from './QuizCreateNestedManyWithoutUserInput.schema';
import { AchievementCreateNestedManyWithoutUserInputSchemaObject } from './AchievementCreateNestedManyWithoutUserInput.schema';
import { CompetitionToUserCreateNestedManyWithoutUserInputSchemaObject } from './CompetitionToUserCreateNestedManyWithoutUserInput.schema';
import { LogoutTokenCreateNestedManyWithoutUserInputSchemaObject } from './LogoutTokenCreateNestedManyWithoutUserInput.schema';
import { QuestionCreateNestedManyWithoutUserInputSchemaObject } from './QuestionCreateNestedManyWithoutUserInput.schema'

export const UserCreateWithoutCreatedCompetitionsInputSchemaObject = {
    id: Joi.string(),
  email: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  avatar: Joi.alternatives().try(Joi.string()),
  isFirstTime: Joi.boolean(),
  createAt: Joi.date(),
  highScore: Joi.number(),
  Quiz: Joi.object().keys(QuizCreateNestedManyWithoutUserInputSchemaObject),
  achievement: Joi.object().keys(AchievementCreateNestedManyWithoutUserInputSchemaObject),
  joinedCompetitions: Joi.object().keys(CompetitionToUserCreateNestedManyWithoutUserInputSchemaObject),
  LogoutToken: Joi.object().keys(LogoutTokenCreateNestedManyWithoutUserInputSchemaObject),
  Question: Joi.object().keys(QuestionCreateNestedManyWithoutUserInputSchemaObject)
}