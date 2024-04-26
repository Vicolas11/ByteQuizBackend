// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputSchemaObject } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { QuestionUpdateManyWithoutCompetitionNestedInputSchemaObject } from './QuestionUpdateManyWithoutCompetitionNestedInput.schema';
import { LeaderboardUpdateManyWithoutCompetitionNestedInputSchemaObject } from './LeaderboardUpdateManyWithoutCompetitionNestedInput.schema';
import { UserUpdateOneRequiredWithoutCreatedCompetitionsNestedInputSchemaObject } from './UserUpdateOneRequiredWithoutCreatedCompetitionsNestedInput.schema'

export const CompetitionUpdateWithoutJoinedUsersInputSchemaObject = {
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
  point: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  totalPoint: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  overallPoint: Joi.alternatives().try(Joi.number(),
Joi.object().keys(IntFieldUpdateOperationsInputSchemaObject)),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  questions: Joi.object().keys(QuestionUpdateManyWithoutCompetitionNestedInputSchemaObject),
  leaderboards: Joi.object().keys(LeaderboardUpdateManyWithoutCompetitionNestedInputSchemaObject),
  createdBy: Joi.object().keys(UserUpdateOneRequiredWithoutCreatedCompetitionsNestedInputSchemaObject)
}