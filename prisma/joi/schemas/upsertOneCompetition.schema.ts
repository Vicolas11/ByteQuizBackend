import Joi from 'joi';
import { CompetitionWhereUniqueInputSchemaObject, CompetitionCreateInputSchemaObject, CompetitionUpdateInputSchemaObject } from './objects'

export const CompetitionUpsertSchema = Joi.object().keys({ where: Joi.object().keys(CompetitionWhereUniqueInputSchemaObject), data: Joi.object().keys(CompetitionCreateInputSchemaObject), update: Joi.object().keys(CompetitionUpdateInputSchemaObject)  }).required()