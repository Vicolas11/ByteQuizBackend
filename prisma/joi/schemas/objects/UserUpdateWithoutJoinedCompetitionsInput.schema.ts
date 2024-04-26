// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputSchemaObject } from './NullableStringFieldUpdateOperationsInput.schema';
import { EnumGenderFieldUpdateOperationsInputSchemaObject } from './EnumGenderFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputSchemaObject } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { EnumRoleFieldUpdateOperationsInputSchemaObject } from './EnumRoleFieldUpdateOperationsInput.schema';
import { QuizUpdateManyWithoutUserNestedInputSchemaObject } from './QuizUpdateManyWithoutUserNestedInput.schema';
import { LeaderboardUpdateManyWithoutUserNestedInputSchemaObject } from './LeaderboardUpdateManyWithoutUserNestedInput.schema';
import { AchievementUpdateManyWithoutUserNestedInputSchemaObject } from './AchievementUpdateManyWithoutUserNestedInput.schema';
import { CompetitionUpdateManyWithoutCreatedByNestedInputSchemaObject } from './CompetitionUpdateManyWithoutCreatedByNestedInput.schema';
import { LogoutTokenUpdateManyWithoutUserNestedInputSchemaObject } from './LogoutTokenUpdateManyWithoutUserNestedInput.schema'

export const UserUpdateWithoutJoinedCompetitionsInputSchemaObject = {
    id: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  email: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  username: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  password: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  avatar: Joi.alternatives().try(Joi.string(),
Joi.object().keys(NullableStringFieldUpdateOperationsInputSchemaObject)),
  gender: Joi.alternatives().try(Joi.object().keys(EnumGenderFieldUpdateOperationsInputSchemaObject)),
  isFirstTime: Joi.alternatives().try(Joi.boolean(),
Joi.object().keys(BoolFieldUpdateOperationsInputSchemaObject)),
  createAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  highScore: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  role: Joi.alternatives().try(Joi.object().keys(EnumRoleFieldUpdateOperationsInputSchemaObject)),
  Quiz: Joi.object().keys(QuizUpdateManyWithoutUserNestedInputSchemaObject),
  Leaderboard: Joi.object().keys(LeaderboardUpdateManyWithoutUserNestedInputSchemaObject),
  achievement: Joi.object().keys(AchievementUpdateManyWithoutUserNestedInputSchemaObject),
  createdCompetitions: Joi.object().keys(CompetitionUpdateManyWithoutCreatedByNestedInputSchemaObject),
  LogoutToken: Joi.object().keys(LogoutTokenUpdateManyWithoutUserNestedInputSchemaObject)
}