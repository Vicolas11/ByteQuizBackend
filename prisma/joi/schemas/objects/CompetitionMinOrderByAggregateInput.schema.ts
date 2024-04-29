// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const CompetitionMinOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  title: SortOrderSchema,
  subtitle: SortOrderSchema,
  imgCover: SortOrderSchema,
  price: SortOrderSchema,
  overallPoint: SortOrderSchema,
  createdAt: SortOrderSchema,
  hasStarted: SortOrderSchema,
  createdUserId: SortOrderSchema
}