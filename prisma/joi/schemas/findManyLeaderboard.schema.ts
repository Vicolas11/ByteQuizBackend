import Joi from 'joi';
import { LeaderboardWhereInputSchemaObject, LeaderboardOrderByWithRelationInputSchemaObject, LeaderboardWhereUniqueInputSchemaObject } from './objects';
import { LeaderboardScalarFieldEnumSchema } from './enums'

export const LeaderboardFindManySchema = Joi.object().keys({ where: Joi.object().keys(LeaderboardWhereInputSchemaObject), orderBy: Joi.object().keys(LeaderboardOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(LeaderboardWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(LeaderboardScalarFieldEnumSchema)  }).required()