// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputSchemaObject } from './SortOrderInput.schema';
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
  competitionId: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  quizId: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  createdAt: SortOrderSchema,
  userId: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  options: Joi.object().keys(OptionOrderByRelationAggregateInputSchemaObject),
  Competition: Joi.object().keys(CompetitionOrderByWithRelationInputSchemaObject),
  Quiz: Joi.object().keys(QuizOrderByWithRelationInputSchemaObject),
  user: Joi.object().keys(UserOrderByWithRelationInputSchemaObject)
}