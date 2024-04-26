// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LogoutTokenCountOrderByAggregateInputSchemaObject } from './LogoutTokenCountOrderByAggregateInput.schema';
import { LogoutTokenMaxOrderByAggregateInputSchemaObject } from './LogoutTokenMaxOrderByAggregateInput.schema';
import { LogoutTokenMinOrderByAggregateInputSchemaObject } from './LogoutTokenMinOrderByAggregateInput.schema'

export const LogoutTokenOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  userId: SortOrderSchema,
  token: SortOrderSchema,
  _count: Joi.object().keys(LogoutTokenCountOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(LogoutTokenMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(LogoutTokenMinOrderByAggregateInputSchemaObject)
}