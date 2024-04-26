// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutAchievementNestedInputSchemaObject } from './UserUpdateOneWithoutAchievementNestedInput.schema'

export const AchievementUpdateInputSchemaObject = {
    id: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  title: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  medalImg: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  User: Joi.object().keys(UserUpdateOneWithoutAchievementNestedInputSchemaObject)
}