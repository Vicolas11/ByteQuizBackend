// @ts-nocheck
import Joi from 'joi';
import { CompetitionCreateNestedOneWithoutQuestionsInputSchemaObject } from './CompetitionCreateNestedOneWithoutQuestionsInput.schema';
import { QuizCreateNestedOneWithoutQuestionsInputSchemaObject } from './QuizCreateNestedOneWithoutQuestionsInput.schema';
import { UserCreateNestedOneWithoutQuestionInputSchemaObject } from './UserCreateNestedOneWithoutQuestionInput.schema'

export const QuestionCreateWithoutOptionsInputSchemaObject = {
    id: Joi.string(),
  question: Joi.string().required(),
  score: Joi.number(),
  time: Joi.number(),
  point: Joi.number(),
  isAnswered: Joi.boolean(),
  isCompleted: Joi.boolean(),
  createdAt: Joi.date(),
  Competition: Joi.object().keys(CompetitionCreateNestedOneWithoutQuestionsInputSchemaObject),
  Quiz: Joi.object().keys(QuizCreateNestedOneWithoutQuestionsInputSchemaObject),
  user: Joi.object().keys(UserCreateNestedOneWithoutQuestionInputSchemaObject)
}