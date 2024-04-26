// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputSchemaObject } from './SortOrderInput.schema';
import { LeaderboardCountOrderByAggregateInputSchemaObject } from './LeaderboardCountOrderByAggregateInput.schema';
import { LeaderboardAvgOrderByAggregateInputSchemaObject } from './LeaderboardAvgOrderByAggregateInput.schema';
import { LeaderboardMaxOrderByAggregateInputSchemaObject } from './LeaderboardMaxOrderByAggregateInput.schema';
import { LeaderboardMinOrderByAggregateInputSchemaObject } from './LeaderboardMinOrderByAggregateInput.schema';
import { LeaderboardSumOrderByAggregateInputSchemaObject } from './LeaderboardSumOrderByAggregateInput.schema'

export const LeaderboardOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  point: SortOrderSchema,
  position: SortOrderSchema,
  performance: SortOrderSchema,
  createdAt: SortOrderSchema,
  userId: SortOrderSchema,
  competitionId: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  _count: Joi.object().keys(LeaderboardCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(LeaderboardAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(LeaderboardMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(LeaderboardMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(LeaderboardSumOrderByAggregateInputSchemaObject)
}