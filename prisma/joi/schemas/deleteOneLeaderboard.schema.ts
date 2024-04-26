import Joi from 'joi';
import { LeaderboardWhereUniqueInputSchemaObject } from './objects'

export const LeaderboardDeleteOneSchema = Joi.object().keys({ where: Joi.object().keys(LeaderboardWhereUniqueInputSchemaObject)  }).required()