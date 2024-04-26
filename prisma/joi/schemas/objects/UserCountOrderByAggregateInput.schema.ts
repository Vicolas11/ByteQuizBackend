// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const UserCountOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  email: SortOrderSchema,
  username: SortOrderSchema,
  password: SortOrderSchema,
  avatar: SortOrderSchema,
  gender: SortOrderSchema,
  isFirstTime: SortOrderSchema,
  createAt: SortOrderSchema,
  highScore: SortOrderSchema,
  role: SortOrderSchema
}