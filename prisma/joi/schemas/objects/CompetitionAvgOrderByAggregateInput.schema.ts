// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const CompetitionAvgOrderByAggregateInputSchemaObject = {
    price: SortOrderSchema,
  point: SortOrderSchema,
  totalPoint: SortOrderSchema,
  overallPoint: SortOrderSchema
}