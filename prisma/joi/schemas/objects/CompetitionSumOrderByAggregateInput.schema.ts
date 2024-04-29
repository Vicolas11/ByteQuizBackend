// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const CompetitionSumOrderByAggregateInputSchemaObject = {
    price: SortOrderSchema,
  overallPoint: SortOrderSchema
}