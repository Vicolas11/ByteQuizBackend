// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CompetitionToUserCountOrderByAggregateInputSchemaObject } from './CompetitionToUserCountOrderByAggregateInput.schema';
import { CompetitionToUserMaxOrderByAggregateInputSchemaObject } from './CompetitionToUserMaxOrderByAggregateInput.schema';
import { CompetitionToUserMinOrderByAggregateInputSchemaObject } from './CompetitionToUserMinOrderByAggregateInput.schema'

export const CompetitionToUserOrderByWithAggregationInputSchemaObject = {
    userId: SortOrderSchema,
  competitionId: SortOrderSchema,
  joinedDate: SortOrderSchema,
  hasJoined: SortOrderSchema,
  _count: Joi.object().keys(CompetitionToUserCountOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(CompetitionToUserMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(CompetitionToUserMinOrderByAggregateInputSchemaObject)
}