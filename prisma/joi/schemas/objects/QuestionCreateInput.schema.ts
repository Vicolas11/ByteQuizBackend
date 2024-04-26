// @ts-nocheck
import Joi from 'joi';
import { OptionCreateNestedManyWithoutQuestionInputSchemaObject } from './OptionCreateNestedManyWithoutQuestionInput.schema';
import { CompetitionCreateNestedOneWithoutQuestionsInputSchemaObject } from './CompetitionCreateNestedOneWithoutQuestionsInput.schema';
import { QuizCreateNestedOneWithoutQuestionsInputSchemaObject } from './QuizCreateNestedOneWithoutQuestionsInput.schema'

export const QuestionCreateInputSchemaObject = {
    id: Joi.string(),
  question: Joi.string().required(),
  score: Joi.number(),
  time: Joi.number(),
  point: Joi.number(),
  isAnswered: Joi.boolean(),
  isCompleted: Joi.boolean(),
  options: Joi.object().keys(OptionCreateNestedManyWithoutQuestionInputSchemaObject),
  Competition: Joi.object().keys(CompetitionCreateNestedOneWithoutQuestionsInputSchemaObject),
  Quiz: Joi.object().keys(QuizCreateNestedOneWithoutQuestionsInputSchemaObject)
}