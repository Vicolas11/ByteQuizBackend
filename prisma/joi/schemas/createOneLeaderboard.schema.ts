import Joi from 'joi';
import { LeaderboardCreateInputSchemaObject } from './objects'

export const LeaderboardCreateSchema = Joi.object().keys({ data: Joi.object().keys(LeaderboardCreateInputSchemaObject)  }).required()