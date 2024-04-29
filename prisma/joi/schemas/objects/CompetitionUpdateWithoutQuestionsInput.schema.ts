// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputSchemaObject } from './BoolFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutCreatedCompetitionsNestedInputSchemaObject } from './UserUpdateOneRequiredWithoutCreatedCompetitionsNestedInput.schema';
import { CompetitionToUserUpdateManyWithoutCompetitionNestedInputSchemaObject } from './CompetitionToUserUpdateManyWithoutCompetitionNestedInput.schema'

export const CompetitionUpdateWithoutQuestionsInputSchemaObject = {
    id: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  title: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  subtitle: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  imgCover: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  price: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  overallPoint: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  hasStarted: Joi.alternatives().try(Joi.boolean(),
Joi.object().keys(BoolFieldUpdateOperationsInputSchemaObject)),
  createdBy: Joi.object().keys(UserUpdateOneRequiredWithoutCreatedCompetitionsNestedInputSchemaObject),
  joinedUsers: Joi.object().keys(CompetitionToUserUpdateManyWithoutCompetitionNestedInputSchemaObject)
}