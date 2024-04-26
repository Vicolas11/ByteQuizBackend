import Joi from 'joi';
import { CompetitionWhereInputSchemaObject } from './objects'

export const CompetitionDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(CompetitionWhereInputSchemaObject)  }).required()