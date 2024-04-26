import Joi from 'joi';
import { LeaderboardUpdateInputSchemaObject, LeaderboardWhereUniqueInputSchemaObject } from './objects'

export const LeaderboardUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(LeaderboardUpdateInputSchemaObject), where: Joi.object().keys(LeaderboardWhereUniqueInputSchemaObject)  }).required()