// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const QuizMaxOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  totalPoint: SortOrderSchema,
  overallPoint: SortOrderSchema,
  createdAt: SortOrderSchema,
  userId: SortOrderSchema,
  hasSubmitted: SortOrderSchema
}