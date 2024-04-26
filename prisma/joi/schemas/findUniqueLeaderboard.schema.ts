import Joi from 'joi';
import { LeaderboardWhereUniqueInputSchemaObject } from './objects'

export const LeaderboardFindUniqueSchema = Joi.object().keys({ where: Joi.object().keys(LeaderboardWhereUniqueInputSchemaObject) }).required()