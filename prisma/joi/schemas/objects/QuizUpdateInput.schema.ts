// @ts-nocheck
import Joi from 'joi';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputSchemaObject } from './BoolFieldUpdateOperationsInput.schema';
import { QuestionUpdateManyWithoutQuizNestedInputSchemaObject } from './QuestionUpdateManyWithoutQuizNestedInput.schema';
import { UserUpdateOneRequiredWithoutQuizNestedInputSchemaObject } from './UserUpdateOneRequiredWithoutQuizNestedInput.schema'

export const QuizUpdateInputSchemaObject = {
    totalPoint: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  overallPoint: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  hasSubmitted: Joi.alternatives().try(Joi.boolean(),
Joi.object().keys(BoolFieldUpdateOperationsInputSchemaObject)),
  questions: Joi.object().keys(QuestionUpdateManyWithoutQuizNestedInputSchemaObject),
  user: Joi.object().keys(UserUpdateOneRequiredWithoutQuizNestedInputSchemaObject)
}