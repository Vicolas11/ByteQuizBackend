// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CompetitionToUserCountOrderByAggregateInputSchemaObject } from './CompetitionToUserCountOrderByAggregateInput.schema';
import { CompetitionToUserAvgOrderByAggregateInputSchemaObject } from './CompetitionToUserAvgOrderByAggregateInput.schema';
import { CompetitionToUserMaxOrderByAggregateInputSchemaObject } from './CompetitionToUserMaxOrderByAggregateInput.schema';
import { CompetitionToUserMinOrderByAggregateInputSchemaObject } from './CompetitionToUserMinOrderByAggregateInput.schema';
import { CompetitionToUserSumOrderByAggregateInputSchemaObject } from './CompetitionToUserSumOrderByAggregateInput.schema'

export const CompetitionToUserOrderByWithAggregationInputSchemaObject = {
    userId: SortOrderSchema,
  competitionId: SortOrderSchema,
  joinedDate: SortOrderSchema,
  hasJoined: SortOrderSchema,
  hasSubmitted: SortOrderSchema,
  totalPoint: SortOrderSchema,
  _count: Joi.object().keys(CompetitionToUserCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(CompetitionToUserAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(CompetitionToUserMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(CompetitionToUserMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(CompetitionToUserSumOrderByAggregateInputSchemaObject)
}