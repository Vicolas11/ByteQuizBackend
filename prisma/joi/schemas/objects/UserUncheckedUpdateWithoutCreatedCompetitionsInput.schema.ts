// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputSchemaObject } from './NullableStringFieldUpdateOperationsInput.schema';
import { EnumGenderFieldUpdateOperationsInputSchemaObject } from './EnumGenderFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputSchemaObject } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { EnumRoleFieldUpdateOperationsInputSchemaObject } from './EnumRoleFieldUpdateOperationsInput.schema';
import { QuizUncheckedUpdateManyWithoutUserNestedInputSchemaObject } from './QuizUncheckedUpdateManyWithoutUserNestedInput.schema';
import { LeaderboardUncheckedUpdateManyWithoutUserNestedInputSchemaObject } from './LeaderboardUncheckedUpdateManyWithoutUserNestedInput.schema';
import { AchievementUncheckedUpdateManyWithoutUserNestedInputSchemaObject } from './AchievementUncheckedUpdateManyWithoutUserNestedInput.schema';
import { CompetitionToUserUncheckedUpdateManyWithoutUserNestedInputSchemaObject } from './CompetitionToUserUncheckedUpdateManyWithoutUserNestedInput.schema';
import { LogoutTokenUncheckedUpdateManyWithoutUserNestedInputSchemaObject } from './LogoutTokenUncheckedUpdateManyWithoutUserNestedInput.schema'

export const UserUncheckedUpdateWithoutCreatedCompetitionsInputSchemaObject = {
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
  Quiz: Joi.object().keys(QuizUncheckedUpdateManyWithoutUserNestedInputSchemaObject),
  Leaderboard: Joi.object().keys(LeaderboardUncheckedUpdateManyWithoutUserNestedInputSchemaObject),
  achievement: Joi.object().keys(AchievementUncheckedUpdateManyWithoutUserNestedInputSchemaObject),
  joinedCompetitions: Joi.object().keys(CompetitionToUserUncheckedUpdateManyWithoutUserNestedInputSchemaObject),
  LogoutToken: Joi.object().keys(LogoutTokenUncheckedUpdateManyWithoutUserNestedInputSchemaObject)
}