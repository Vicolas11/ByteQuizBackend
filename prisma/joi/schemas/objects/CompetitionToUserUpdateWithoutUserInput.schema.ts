// @ts-nocheck
import Joi from 'joi';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputSchemaObject } from './BoolFieldUpdateOperationsInput.schema';
import { CompetitionUpdateOneRequiredWithoutJoinedUsersNestedInputSchemaObject } from './CompetitionUpdateOneRequiredWithoutJoinedUsersNestedInput.schema'

export const CompetitionToUserUpdateWithoutUserInputSchemaObject = {
    joinedDate: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  hasJoined: Joi.alternatives().try(Joi.boolean(),
Joi.object().keys(BoolFieldUpdateOperationsInputSchemaObject)),
  competition: Joi.object().keys(CompetitionUpdateOneRequiredWithoutJoinedUsersNestedInputSchemaObject)
}