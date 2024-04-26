// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputSchemaObject } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputSchemaObject } from './UserOrderByWithRelationInput.schema'

export const AchievementOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  title: SortOrderSchema,
  medalImg: SortOrderSchema,
  userId: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  User: Joi.object().keys(UserOrderByWithRelationInputSchemaObject)
}