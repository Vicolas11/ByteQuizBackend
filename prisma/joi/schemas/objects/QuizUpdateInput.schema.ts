// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { QuestionUpdateManyWithoutQuizNestedInputSchemaObject } from './QuestionUpdateManyWithoutQuizNestedInput.schema';
import { UserUpdateOneRequiredWithoutQuizNestedInputSchemaObject } from './UserUpdateOneRequiredWithoutQuizNestedInput.schema'

export const QuizUpdateInputSchemaObject = {
    id: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  totalPoint: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  overallPoint: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  questions: Joi.object().keys(QuestionUpdateManyWithoutQuizNestedInputSchemaObject),
  user: Joi.object().keys(UserUpdateOneRequiredWithoutQuizNestedInputSchemaObject)
}