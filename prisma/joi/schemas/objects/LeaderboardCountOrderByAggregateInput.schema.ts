// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const LeaderboardCountOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  point: SortOrderSchema,
  position: SortOrderSchema,
  performance: SortOrderSchema,
  createdAt: SortOrderSchema,
  userId: SortOrderSchema,
  competitionId: SortOrderSchema
}