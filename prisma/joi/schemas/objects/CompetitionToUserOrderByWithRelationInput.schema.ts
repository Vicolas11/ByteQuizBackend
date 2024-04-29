// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputSchemaObject } from './UserOrderByWithRelationInput.schema';
import { CompetitionOrderByWithRelationInputSchemaObject } from './CompetitionOrderByWithRelationInput.schema'

export const CompetitionToUserOrderByWithRelationInputSchemaObject = {
    userId: SortOrderSchema,
  competitionId: SortOrderSchema,
  joinedDate: SortOrderSchema,
  hasJoined: SortOrderSchema,
  hasSubmitted: SortOrderSchema,
  totalPoint: SortOrderSchema,
  user: Joi.object().keys(UserOrderByWithRelationInputSchemaObject),
  competition: Joi.object().keys(CompetitionOrderByWithRelationInputSchemaObject)
}