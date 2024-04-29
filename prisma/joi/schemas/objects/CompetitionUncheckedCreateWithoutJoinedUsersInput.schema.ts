// @ts-nocheck
import Joi from 'joi';
import { QuestionUncheckedCreateNestedManyWithoutCompetitionInputSchemaObject } from './QuestionUncheckedCreateNestedManyWithoutCompetitionInput.schema'

export const CompetitionUncheckedCreateWithoutJoinedUsersInputSchemaObject = {
    id: Joi.string(),
  title: Joi.string().required(),
  subtitle: Joi.string().required(),
  imgCover: Joi.string().required(),
  price: Joi.number().required(),
  overallPoint: Joi.number(),
  createdAt: Joi.date(),
  hasStarted: Joi.boolean(),
  createdUserId: Joi.string().required(),
  questions: Joi.object().keys(QuestionUncheckedCreateNestedManyWithoutCompetitionInputSchemaObject)
}