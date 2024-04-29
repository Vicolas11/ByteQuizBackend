// @ts-nocheck
import Joi from 'joi';
import { AchievementUncheckedCreateNestedManyWithoutUserInputSchemaObject } from './AchievementUncheckedCreateNestedManyWithoutUserInput.schema';
import { CompetitionUncheckedCreateNestedManyWithoutCreatedByInputSchemaObject } from './CompetitionUncheckedCreateNestedManyWithoutCreatedByInput.schema';
import { CompetitionToUserUncheckedCreateNestedManyWithoutUserInputSchemaObject } from './CompetitionToUserUncheckedCreateNestedManyWithoutUserInput.schema';
import { LogoutTokenUncheckedCreateNestedManyWithoutUserInputSchemaObject } from './LogoutTokenUncheckedCreateNestedManyWithoutUserInput.schema';
import { QuestionUncheckedCreateNestedManyWithoutUserInputSchemaObject } from './QuestionUncheckedCreateNestedManyWithoutUserInput.schema'

export const UserUncheckedCreateWithoutQuizInputSchemaObject = {
    id: Joi.string(),
  email: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  avatar: Joi.alternatives().try(Joi.string()),
  isFirstTime: Joi.boolean(),
  createAt: Joi.date(),
  highScore: Joi.number(),
  achievement: Joi.object().keys(AchievementUncheckedCreateNestedManyWithoutUserInputSchemaObject),
  createdCompetitions: Joi.object().keys(CompetitionUncheckedCreateNestedManyWithoutCreatedByInputSchemaObject),
  joinedCompetitions: Joi.object().keys(CompetitionToUserUncheckedCreateNestedManyWithoutUserInputSchemaObject),
  LogoutToken: Joi.object().keys(LogoutTokenUncheckedCreateNestedManyWithoutUserInputSchemaObject),
  Question: Joi.object().keys(QuestionUncheckedCreateNestedManyWithoutUserInputSchemaObject)
}