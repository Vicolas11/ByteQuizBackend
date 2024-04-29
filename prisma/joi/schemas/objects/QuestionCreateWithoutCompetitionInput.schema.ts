// @ts-nocheck
import Joi from 'joi';
import { OptionCreateNestedManyWithoutQuestionInputSchemaObject } from './OptionCreateNestedManyWithoutQuestionInput.schema';
import { QuizCreateNestedOneWithoutQuestionsInputSchemaObject } from './QuizCreateNestedOneWithoutQuestionsInput.schema';
import { UserCreateNestedOneWithoutQuestionInputSchemaObject } from './UserCreateNestedOneWithoutQuestionInput.schema'

export const QuestionCreateWithoutCompetitionInputSchemaObject = {
    id: Joi.string(),
  question: Joi.string().required(),
  score: Joi.number(),
  time: Joi.number(),
  point: Joi.number(),
  isAnswered: Joi.boolean(),
  isCompleted: Joi.boolean(),
  createdAt: Joi.date(),
  options: Joi.object().keys(OptionCreateNestedManyWithoutQuestionInputSchemaObject),
  Quiz: Joi.object().keys(QuizCreateNestedOneWithoutQuestionsInputSchemaObject),
  user: Joi.object().keys(UserCreateNestedOneWithoutQuestionInputSchemaObject)
}