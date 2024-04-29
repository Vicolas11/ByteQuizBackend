// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { QuestionOrderByRelationAggregateInputSchemaObject } from './QuestionOrderByRelationAggregateInput.schema';
import { UserOrderByWithRelationInputSchemaObject } from './UserOrderByWithRelationInput.schema';
import { CompetitionToUserOrderByRelationAggregateInputSchemaObject } from './CompetitionToUserOrderByRelationAggregateInput.schema'

export const CompetitionOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  title: SortOrderSchema,
  subtitle: SortOrderSchema,
  imgCover: SortOrderSchema,
  price: SortOrderSchema,
  overallPoint: SortOrderSchema,
  createdAt: SortOrderSchema,
  hasStarted: SortOrderSchema,
  createdUserId: SortOrderSchema,
  questions: Joi.object().keys(QuestionOrderByRelationAggregateInputSchemaObject),
  createdBy: Joi.object().keys(UserOrderByWithRelationInputSchemaObject),
  joinedUsers: Joi.object().keys(CompetitionToUserOrderByRelationAggregateInputSchemaObject)
}