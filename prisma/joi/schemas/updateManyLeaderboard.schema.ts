import Joi from 'joi';
import { LeaderboardUpdateManyMutationInputSchemaObject, LeaderboardWhereInputSchemaObject } from './objects'

export const LeaderboardUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(LeaderboardUpdateManyMutationInputSchemaObject), where: Joi.object().keys(LeaderboardWhereInputSchemaObject)  }).required()