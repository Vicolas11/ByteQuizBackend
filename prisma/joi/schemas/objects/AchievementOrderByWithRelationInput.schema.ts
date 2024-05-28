// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputSchemaObject } from './UserOrderByWithRelationInput.schema'

export const AchievementOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  title: SortOrderSchema,
  medalImg: SortOrderSchema,
  userId: SortOrderSchema,
  createdAt: SortOrderSchema,
  User: Joi.object().keys(UserOrderByWithRelationInputSchemaObject)
}