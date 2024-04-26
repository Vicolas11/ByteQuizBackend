import Joi from 'joi';
import { LeaderboardWhereUniqueInputSchemaObject, LeaderboardCreateInputSchemaObject, LeaderboardUpdateInputSchemaObject } from './objects'

export const LeaderboardUpsertSchema = Joi.object().keys({ where: Joi.object().keys(LeaderboardWhereUniqueInputSchemaObject), data: Joi.object().keys(LeaderboardCreateInputSchemaObject), update: Joi.object().keys(LeaderboardUpdateInputSchemaObject)  }).required()