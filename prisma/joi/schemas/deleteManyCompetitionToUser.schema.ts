import Joi from 'joi';
import { CompetitionToUserWhereInputSchemaObject } from './objects'

export const CompetitionToUserDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(CompetitionToUserWhereInputSchemaObject)  }).required()