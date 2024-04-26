// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const QuizSumOrderByAggregateInputSchemaObject = {
    totalPoint: SortOrderSchema,
  overallPoint: SortOrderSchema
}