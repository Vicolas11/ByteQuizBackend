// @ts-nocheck
import Joi from 'joi';
import { QuestionUncheckedCreateNestedManyWithoutCompetitionInputSchemaObject } from './QuestionUncheckedCreateNestedManyWithoutCompetitionInput.schema';
import { CompetitionToUserUncheckedCreateNestedManyWithoutCompetitionInputSchemaObject } from './CompetitionToUserUncheckedCreateNestedManyWithoutCompetitionInput.schema'

export const CompetitionUncheckedCreateWithoutLeaderboardsInputSchemaObject = {
    id: Joi.string(),
  title: Joi.string().required(),
  subtitle: Joi.string().required(),
  imgCover: Joi.string().required(),
  price: Joi.number().required(),
  point: Joi.number(),
  totalPoint: Joi.number(),
  overallPoint: Joi.number(),
  createdAt: Joi.date(),
  createdUserId: Joi.string().required(),
  questions: Joi.object().keys(QuestionUncheckedCreateNestedManyWithoutCompetitionInputSchemaObject),
  joinedUsers: Joi.object().keys(CompetitionToUserUncheckedCreateNestedManyWithoutCompetitionInputSchemaObject)
}