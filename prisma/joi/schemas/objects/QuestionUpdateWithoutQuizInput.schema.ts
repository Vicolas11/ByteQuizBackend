// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputSchemaObject } from './BoolFieldUpdateOperationsInput.schema';
import { OptionUpdateManyWithoutQuestionNestedInputSchemaObject } from './OptionUpdateManyWithoutQuestionNestedInput.schema';
import { CompetitionUpdateOneWithoutQuestionsNestedInputSchemaObject } from './CompetitionUpdateOneWithoutQuestionsNestedInput.schema'

export const QuestionUpdateWithoutQuizInputSchemaObject = {
    id: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  question: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  score: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  time: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  point: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  isAnswered: Joi.alternatives().try(Joi.boolean(),
Joi.object().keys(BoolFieldUpdateOperationsInputSchemaObject)),
  isCompleted: Joi.alternatives().try(Joi.boolean(),
Joi.object().keys(BoolFieldUpdateOperationsInputSchemaObject)),
  options: Joi.object().keys(OptionUpdateManyWithoutQuestionNestedInputSchemaObject),
  Competition: Joi.object().keys(CompetitionUpdateOneWithoutQuestionsNestedInputSchemaObject)
}