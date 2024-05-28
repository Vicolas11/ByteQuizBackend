// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { QuestionOrderByWithRelationInputSchemaObject } from './QuestionOrderByWithRelationInput.schema'

export const OptionOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  value: SortOrderSchema,
  label: SortOrderSchema,
  isCorrect: SortOrderSchema,
  isSelected: SortOrderSchema,
  questionId: SortOrderSchema,
  Question: Joi.object().keys(QuestionOrderByWithRelationInputSchemaObject)
}