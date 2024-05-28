// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AchievementCountOrderByAggregateInputSchemaObject } from './AchievementCountOrderByAggregateInput.schema';
import { AchievementMaxOrderByAggregateInputSchemaObject } from './AchievementMaxOrderByAggregateInput.schema';
import { AchievementMinOrderByAggregateInputSchemaObject } from './AchievementMinOrderByAggregateInput.schema'

export const AchievementOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  title: SortOrderSchema,
  medalImg: SortOrderSchema,
  userId: SortOrderSchema,
  createdAt: SortOrderSchema,
  _count: Joi.object().keys(AchievementCountOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(AchievementMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(AchievementMinOrderByAggregateInputSchemaObject)
}