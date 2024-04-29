// @ts-nocheck
import Joi from 'joi';
import { OptionCreateNestedManyWithoutQuestionInputSchemaObject } from './OptionCreateNestedManyWithoutQuestionInput.schema';
import { CompetitionCreateNestedOneWithoutQuestionsInputSchemaObject } from './CompetitionCreateNestedOneWithoutQuestionsInput.schema';
import { UserCreateNestedOneWithoutQuestionInputSchemaObject } from './UserCreateNestedOneWithoutQuestionInput.schema'

export const QuestionCreateWithoutQuizInputSchemaObject = {
    id: Joi.string(),
  question: Joi.string().required(),
  score: Joi.number(),
  time: Joi.number(),
  point: Joi.number(),
  isAnswered: Joi.boolean(),
  isCompleted: Joi.boolean(),
  createdAt: Joi.date(),
  options: Joi.object().keys(OptionCreateNestedManyWithoutQuestionInputSchemaObject),
  Competition: Joi.object().keys(CompetitionCreateNestedOneWithoutQuestionsInputSchemaObject),
  user: Joi.object().keys(UserCreateNestedOneWithoutQuestionInputSchemaObject)
}