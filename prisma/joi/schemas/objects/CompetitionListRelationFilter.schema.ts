// @ts-nocheck
import Joi from 'joi';
import { CompetitionWhereInputSchemaObject } from './CompetitionWhereInput.schema'

export const CompetitionListRelationFilterSchemaObject = {
    every: Joi.object().keys(CompetitionWhereInputSchemaObject),
  some: Joi.object().keys(CompetitionWhereInputSchemaObject),
  none: Joi.object().keys(CompetitionWhereInputSchemaObject)
}