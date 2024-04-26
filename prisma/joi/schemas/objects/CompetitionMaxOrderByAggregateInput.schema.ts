// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const CompetitionMaxOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  title: SortOrderSchema,
  subtitle: SortOrderSchema,
  imgCover: SortOrderSchema,
  price: SortOrderSchema,
  point: SortOrderSchema,
  totalPoint: SortOrderSchema,
  overallPoint: SortOrderSchema,
  createdAt: SortOrderSchema,
  createdUserId: SortOrderSchema
}