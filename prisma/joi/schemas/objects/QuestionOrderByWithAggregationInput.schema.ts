// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { QuestionCountOrderByAggregateInputSchemaObject } from './QuestionCountOrderByAggregateInput.schema';
import { QuestionAvgOrderByAggregateInputSchemaObject } from './QuestionAvgOrderByAggregateInput.schema';
import { QuestionMaxOrderByAggregateInputSchemaObject } from './QuestionMaxOrderByAggregateInput.schema';
import { QuestionMinOrderByAggregateInputSchemaObject } from './QuestionMinOrderByAggregateInput.schema';
import { QuestionSumOrderByAggregateInputSchemaObject } from './QuestionSumOrderByAggregateInput.schema'

export const QuestionOrderByWithAggregationInputSchemaObject = {
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
  _count: Joi.object().keys(QuestionCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(QuestionAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(QuestionMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(QuestionMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(QuestionSumOrderByAggregateInputSchemaObject)
}