// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const QuizCountOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  totalPoint: SortOrderSchema,
  overallPoint: SortOrderSchema,
  createdAt: SortOrderSchema,
  userId: SortOrderSchema,
  hasSubmitted: SortOrderSchema
}