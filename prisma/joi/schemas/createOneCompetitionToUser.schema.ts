import Joi from 'joi';
import { CompetitionToUserCreateInputSchemaObject } from './objects'

export const CompetitionToUserCreateSchema = Joi.object().keys({ data: Joi.object().keys(CompetitionToUserCreateInputSchemaObject)  }).required()