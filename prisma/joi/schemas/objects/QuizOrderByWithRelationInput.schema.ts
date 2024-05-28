// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { QuestionOrderByRelationAggregateInputSchemaObject } from './QuestionOrderByRelationAggregateInput.schema';
import { UserOrderByWithRelationInputSchemaObject } from './UserOrderByWithRelationInput.schema'

export const QuizOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  totalPoint: SortOrderSchema,
  overallPoint: SortOrderSchema,
  createdAt: SortOrderSchema,
  userId: SortOrderSchema,
  hasSubmitted: SortOrderSchema,
  questions: Joi.object().keys(QuestionOrderByRelationAggregateInputSchemaObject),
  user: Joi.object().keys(UserOrderByWithRelationInputSchemaObject)
}