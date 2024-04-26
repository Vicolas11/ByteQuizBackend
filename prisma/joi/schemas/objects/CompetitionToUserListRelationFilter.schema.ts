// @ts-nocheck
import Joi from 'joi';
import { CompetitionToUserWhereInputSchemaObject } from './CompetitionToUserWhereInput.schema'

export const CompetitionToUserListRelationFilterSchemaObject = {
    every: Joi.object().keys(CompetitionToUserWhereInputSchemaObject),
  some: Joi.object().keys(CompetitionToUserWhereInputSchemaObject),
  none: Joi.object().keys(CompetitionToUserWhereInputSchemaObject)
}