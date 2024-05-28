// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { QuizCountOrderByAggregateInputSchemaObject } from './QuizCountOrderByAggregateInput.schema';
import { QuizAvgOrderByAggregateInputSchemaObject } from './QuizAvgOrderByAggregateInput.schema';
import { QuizMaxOrderByAggregateInputSchemaObject } from './QuizMaxOrderByAggregateInput.schema';
import { QuizMinOrderByAggregateInputSchemaObject } from './QuizMinOrderByAggregateInput.schema';
import { QuizSumOrderByAggregateInputSchemaObject } from './QuizSumOrderByAggregateInput.schema'

export const QuizOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  totalPoint: SortOrderSchema,
  overallPoint: SortOrderSchema,
  createdAt: SortOrderSchema,
  userId: SortOrderSchema,
  hasSubmitted: SortOrderSchema,
  _count: Joi.object().keys(QuizCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(QuizAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(QuizMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(QuizMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(QuizSumOrderByAggregateInputSchemaObject)
}