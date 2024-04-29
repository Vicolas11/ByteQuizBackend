// @ts-nocheck
import Joi from 'joi';
import { QuestionCreateNestedManyWithoutCompetitionInputSchemaObject } from './QuestionCreateNestedManyWithoutCompetitionInput.schema';
import { UserCreateNestedOneWithoutCreatedCompetitionsInputSchemaObject } from './UserCreateNestedOneWithoutCreatedCompetitionsInput.schema';
import { CompetitionToUserCreateNestedManyWithoutCompetitionInputSchemaObject } from './CompetitionToUserCreateNestedManyWithoutCompetitionInput.schema'

export const CompetitionCreateInputSchemaObject = {
    id: Joi.string(),
  title: Joi.string().required(),
  subtitle: Joi.string().required(),
  imgCover: Joi.string().required(),
  price: Joi.number().required(),
  overallPoint: Joi.number(),
  createdAt: Joi.date(),
  hasStarted: Joi.boolean(),
  questions: Joi.object().keys(QuestionCreateNestedManyWithoutCompetitionInputSchemaObject),
  createdBy: Joi.object().keys(UserCreateNestedOneWithoutCreatedCompetitionsInputSchemaObject),
  joinedUsers: Joi.object().keys(CompetitionToUserCreateNestedManyWithoutCompetitionInputSchemaObject)
}