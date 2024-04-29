// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CompetitionCountOrderByAggregateInputSchemaObject } from './CompetitionCountOrderByAggregateInput.schema';
import { CompetitionAvgOrderByAggregateInputSchemaObject } from './CompetitionAvgOrderByAggregateInput.schema';
import { CompetitionMaxOrderByAggregateInputSchemaObject } from './CompetitionMaxOrderByAggregateInput.schema';
import { CompetitionMinOrderByAggregateInputSchemaObject } from './CompetitionMinOrderByAggregateInput.schema';
import { CompetitionSumOrderByAggregateInputSchemaObject } from './CompetitionSumOrderByAggregateInput.schema'

export const CompetitionOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  title: SortOrderSchema,
  subtitle: SortOrderSchema,
  imgCover: SortOrderSchema,
  price: SortOrderSchema,
  overallPoint: SortOrderSchema,
  createdAt: SortOrderSchema,
  hasStarted: SortOrderSchema,
  createdUserId: SortOrderSchema,
  _count: Joi.object().keys(CompetitionCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(CompetitionAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(CompetitionMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(CompetitionMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(CompetitionSumOrderByAggregateInputSchemaObject)
}