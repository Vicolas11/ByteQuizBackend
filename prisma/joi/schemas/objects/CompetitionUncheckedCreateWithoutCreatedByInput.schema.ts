// @ts-nocheck
import Joi from 'joi';
import { QuestionUncheckedCreateNestedManyWithoutCompetitionInputSchemaObject } from './QuestionUncheckedCreateNestedManyWithoutCompetitionInput.schema';
import { CompetitionToUserUncheckedCreateNestedManyWithoutCompetitionInputSchemaObject } from './CompetitionToUserUncheckedCreateNestedManyWithoutCompetitionInput.schema'

export const CompetitionUncheckedCreateWithoutCreatedByInputSchemaObject = {
    id: Joi.string(),
  title: Joi.string().required(),
  subtitle: Joi.string().required(),
  imgCover: Joi.string().required(),
  price: Joi.number().required(),
  overallPoint: Joi.number(),
  createdAt: Joi.date(),
  hasStarted: Joi.boolean(),
  questions: Joi.object().keys(QuestionUncheckedCreateNestedManyWithoutCompetitionInputSchemaObject),
  joinedUsers: Joi.object().keys(CompetitionToUserUncheckedCreateNestedManyWithoutCompetitionInputSchemaObject)
}