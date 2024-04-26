import Joi from 'joi';
import { CompetitionToUserWhereInputSchemaObject, CompetitionToUserOrderByWithRelationInputSchemaObject, CompetitionToUserWhereUniqueInputSchemaObject } from './objects';
import { CompetitionToUserScalarFieldEnumSchema } from './enums'

export const CompetitionToUserFindFirstSchema = Joi.object().keys({ where: Joi.object().keys(CompetitionToUserWhereInputSchemaObject), orderBy: Joi.object().keys(CompetitionToUserOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(CompetitionToUserWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(CompetitionToUserScalarFieldEnumSchema) }).required()