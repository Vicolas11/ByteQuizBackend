// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const CompetitionToUserMinOrderByAggregateInputSchemaObject = {
    userId: SortOrderSchema,
  competitionId: SortOrderSchema,
  joinedDate: SortOrderSchema,
  hasJoined: SortOrderSchema,
  hasSubmitted: SortOrderSchema,
  totalPoint: SortOrderSchema
}