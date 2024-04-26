// @ts-nocheck
import Joi from 'joi';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputSchemaObject } from './BoolFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutJoinedCompetitionsNestedInputSchemaObject } from './UserUpdateOneRequiredWithoutJoinedCompetitionsNestedInput.schema'

export const CompetitionToUserUpdateWithoutCompetitionInputSchemaObject = {
    joinedDate: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  hasJoined: Joi.alternatives().try(Joi.boolean(),
Joi.object().keys(BoolFieldUpdateOperationsInputSchemaObject)),
  user: Joi.object().keys(UserUpdateOneRequiredWithoutJoinedCompetitionsNestedInputSchemaObject)
}