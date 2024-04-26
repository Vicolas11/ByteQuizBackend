// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputSchemaObject } from './SortOrderInput.schema';
import { OptionCountOrderByAggregateInputSchemaObject } from './OptionCountOrderByAggregateInput.schema';
import { OptionMaxOrderByAggregateInputSchemaObject } from './OptionMaxOrderByAggregateInput.schema';
import { OptionMinOrderByAggregateInputSchemaObject } from './OptionMinOrderByAggregateInput.schema'

export const OptionOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  value: SortOrderSchema,
  label: SortOrderSchema,
  isCorrect: SortOrderSchema,
  isSelected: SortOrderSchema,
  questionId: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  _count: Joi.object().keys(OptionCountOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(OptionMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(OptionMinOrderByAggregateInputSchemaObject)
}