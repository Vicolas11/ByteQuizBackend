// @ts-nocheck
import Joi from 'joi';
import { OptionCreateNestedManyWithoutQuestionInputSchemaObject } from './OptionCreateNestedManyWithoutQuestionInput.schema';
import { CompetitionCreateNestedOneWithoutQuestionsInputSchemaObject } from './CompetitionCreateNestedOneWithoutQuestionsInput.schema'

export const QuestionCreateWithoutQuizInputSchemaObject = {
    id: Joi.string(),
  question: Joi.string().required(),
  score: Joi.number(),
  time: Joi.number(),
  point: Joi.number(),
  isAnswered: Joi.boolean(),
  isCompleted: Joi.boolean(),
  options: Joi.object().keys(OptionCreateNestedManyWithoutQuestionInputSchemaObject),
  Competition: Joi.object().keys(CompetitionCreateNestedOneWithoutQuestionsInputSchemaObject)
}