// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const QuestionSumOrderByAggregateInputSchemaObject = {
    score: SortOrderSchema,
  time: SortOrderSchema,
  point: SortOrderSchema
}