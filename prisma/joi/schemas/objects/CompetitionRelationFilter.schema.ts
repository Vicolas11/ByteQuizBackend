// @ts-nocheck
import Joi from 'joi';
import { CompetitionWhereInputSchemaObject } from './CompetitionWhereInput.schema'

export const CompetitionRelationFilterSchemaObject = {
    is: Joi.alternatives().try(Joi.object().keys(CompetitionWhereInputSchemaObject)),
  isNot: Joi.alternatives().try(Joi.object().keys(CompetitionWhereInputSchemaObject))
}