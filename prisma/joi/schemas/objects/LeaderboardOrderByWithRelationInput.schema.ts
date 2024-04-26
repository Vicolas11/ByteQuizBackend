// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputSchemaObject } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputSchemaObject } from './UserOrderByWithRelationInput.schema';
import { CompetitionOrderByWithRelationInputSchemaObject } from './CompetitionOrderByWithRelationInput.schema'

export const LeaderboardOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  point: SortOrderSchema,
  position: SortOrderSchema,
  performance: SortOrderSchema,
  createdAt: SortOrderSchema,
  userId: SortOrderSchema,
  competitionId: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  user: Joi.object().keys(UserOrderByWithRelationInputSchemaObject),
  Competition: Joi.object().keys(CompetitionOrderByWithRelationInputSchemaObject)
}