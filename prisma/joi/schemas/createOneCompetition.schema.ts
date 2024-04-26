import Joi from 'joi';
import { CompetitionCreateInputSchemaObject } from './objects'

export const CompetitionCreateSchema = Joi.object().keys({ data: Joi.object().keys(CompetitionCreateInputSchemaObject)  }).required()