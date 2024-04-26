import Joi from 'joi';
import { LeaderboardWhereInputSchemaObject } from './objects'

export const LeaderboardDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(LeaderboardWhereInputSchemaObject)  }).required()