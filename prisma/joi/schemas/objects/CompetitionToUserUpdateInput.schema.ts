// @ts-nocheck
import Joi from 'joi';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputSchemaObject } from './BoolFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutJoinedCompetitionsNestedInputSchemaObject } from './UserUpdateOneRequiredWithoutJoinedCompetitionsNestedInput.schema';
import { CompetitionUpdateOneRequiredWithoutJoinedUsersNestedInputSchemaObject } from './CompetitionUpdateOneRequiredWithoutJoinedUsersNestedInput.schema'

export const CompetitionToUserUpdateInputSchemaObject = {
    joinedDate: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  hasJoined: Joi.alternatives().try(Joi.boolean(),
Joi.object().keys(BoolFieldUpdateOperationsInputSchemaObject)),
  hasSubmitted: Joi.alternatives().try(Joi.boolean(),
Joi.object().keys(BoolFieldUpdateOperationsInputSchemaObject)),
  totalPoint: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  user: Joi.object().keys(UserUpdateOneRequiredWithoutJoinedCompetitionsNestedInputSchemaObject),
  competition: Joi.object().keys(CompetitionUpdateOneRequiredWithoutJoinedUsersNestedInputSchemaObject)
}