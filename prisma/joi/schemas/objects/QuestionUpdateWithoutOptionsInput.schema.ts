// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputSchemaObject } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { CompetitionUpdateOneWithoutQuestionsNestedInputSchemaObject } from './CompetitionUpdateOneWithoutQuestionsNestedInput.schema';
import { QuizUpdateOneWithoutQuestionsNestedInputSchemaObject } from './QuizUpdateOneWithoutQuestionsNestedInput.schema';
import { UserUpdateOneWithoutQuestionNestedInputSchemaObject } from './UserUpdateOneWithoutQuestionNestedInput.schema'

export const QuestionUpdateWithoutOptionsInputSchemaObject = {
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
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  Competition: Joi.object().keys(CompetitionUpdateOneWithoutQuestionsNestedInputSchemaObject),
  Quiz: Joi.object().keys(QuizUpdateOneWithoutQuestionsNestedInputSchemaObject),
  user: Joi.object().keys(UserUpdateOneWithoutQuestionNestedInputSchemaObject)
}