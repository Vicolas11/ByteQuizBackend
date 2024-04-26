// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const CompetitionToUserMaxOrderByAggregateInputSchemaObject = {
    userId: SortOrderSchema,
  competitionId: SortOrderSchema,
  joinedDate: SortOrderSchema,
  hasJoined: SortOrderSchema
}