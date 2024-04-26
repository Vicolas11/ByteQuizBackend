import Joi from 'joi';
import { CompetitionWhereInputSchemaObject, CompetitionOrderByWithRelationInputSchemaObject, CompetitionWhereUniqueInputSchemaObject } from './objects'

export const CompetitionAggregateSchema = Joi.object().keys({ where: Joi.object().keys(CompetitionWhereInputSchemaObject), orderBy: Joi.object().keys(CompetitionOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(CompetitionWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number()  }).required()