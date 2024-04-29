// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const CompetitionAvgOrderByAggregateInputSchemaObject = {
    price: SortOrderSchema,
  overallPoint: SortOrderSchema
}