// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutLeaderboardNestedInputSchemaObject } from './UserUpdateOneRequiredWithoutLeaderboardNestedInput.schema';
import { CompetitionUpdateOneWithoutLeaderboardsNestedInputSchemaObject } from './CompetitionUpdateOneWithoutLeaderboardsNestedInput.schema'

export const LeaderboardUpdateInputSchemaObject = {
    id: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  point: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  position: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  performance: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  user: Joi.object().keys(UserUpdateOneRequiredWithoutLeaderboardNestedInputSchemaObject),
  Competition: Joi.object().keys(CompetitionUpdateOneWithoutLeaderboardsNestedInputSchemaObject)
}