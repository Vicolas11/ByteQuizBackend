// @ts-nocheck
import Joi from 'joi';
import { QuestionCreateNestedManyWithoutCompetitionInputSchemaObject } from './QuestionCreateNestedManyWithoutCompetitionInput.schema';
import { LeaderboardCreateNestedManyWithoutCompetitionInputSchemaObject } from './LeaderboardCreateNestedManyWithoutCompetitionInput.schema';
import { UserCreateNestedOneWithoutCreatedCompetitionsInputSchemaObject } from './UserCreateNestedOneWithoutCreatedCompetitionsInput.schema';
import { CompetitionToUserCreateNestedManyWithoutCompetitionInputSchemaObject } from './CompetitionToUserCreateNestedManyWithoutCompetitionInput.schema'

export const CompetitionCreateInputSchemaObject = {
    id: Joi.string(),
  title: Joi.string().required(),
  subtitle: Joi.string().required(),
  imgCover: Joi.string().required(),
  price: Joi.number().required(),
  point: Joi.number(),
  totalPoint: Joi.number(),
  overallPoint: Joi.number(),
  createdAt: Joi.date(),
  questions: Joi.object().keys(QuestionCreateNestedManyWithoutCompetitionInputSchemaObject),
  leaderboards: Joi.object().keys(LeaderboardCreateNestedManyWithoutCompetitionInputSchemaObject),
  createdBy: Joi.object().keys(UserCreateNestedOneWithoutCreatedCompetitionsInputSchemaObject),
  joinedUsers: Joi.object().keys(CompetitionToUserCreateNestedManyWithoutCompetitionInputSchemaObject)
}