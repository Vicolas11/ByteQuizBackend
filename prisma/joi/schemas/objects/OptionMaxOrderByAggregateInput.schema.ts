// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const OptionMaxOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  value: SortOrderSchema,
  label: SortOrderSchema,
  isCorrect: SortOrderSchema,
  isSelected: SortOrderSchema,
  questionId: SortOrderSchema
}