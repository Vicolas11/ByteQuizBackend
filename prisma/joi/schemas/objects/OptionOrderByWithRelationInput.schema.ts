// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputSchemaObject } from './SortOrderInput.schema';
import { QuestionOrderByWithRelationInputSchemaObject } from './QuestionOrderByWithRelationInput.schema'

export const OptionOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  value: SortOrderSchema,
  label: SortOrderSchema,
  isCorrect: SortOrderSchema,
  isSelected: SortOrderSchema,
  questionId: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  Question: Joi.object().keys(QuestionOrderByWithRelationInputSchemaObject)
}