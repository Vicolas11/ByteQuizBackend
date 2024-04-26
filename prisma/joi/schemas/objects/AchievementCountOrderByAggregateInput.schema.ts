// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const AchievementCountOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  title: SortOrderSchema,
  medalImg: SortOrderSchema,
  userId: SortOrderSchema
}