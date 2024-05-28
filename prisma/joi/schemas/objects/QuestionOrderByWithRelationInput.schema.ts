// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { OptionOrderByRelationAggregateInputSchemaObject } from './OptionOrderByRelationAggregateInput.schema';
import { CompetitionOrderByWithRelationInputSchemaObject } from './CompetitionOrderByWithRelationInput.schema';
import { QuizOrderByWithRelationInputSchemaObject } from './QuizOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputSchemaObject } from './UserOrderByWithRelationInput.schema'

export const QuestionOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  question: SortOrderSchema,
  score: SortOrderSchema,
  time: SortOrderSchema,
  point: SortOrderSchema,
  isAnswered: SortOrderSchema,
  isCompleted: SortOrderSchema,
  competitionId: SortOrderSchema,
  quizId: SortOrderSchema,
  createdAt: SortOrderSchema,
  userId: SortOrderSchema,
  options: Joi.object().keys(OptionOrderByRelationAggregateInputSchemaObject),
  Competition: Joi.object().keys(CompetitionOrderByWithRelationInputSchemaObject),
  Quiz: Joi.object().keys(QuizOrderByWithRelationInputSchemaObject),
  user: Joi.object().keys(UserOrderByWithRelationInputSchemaObject)
}