import Joi from 'joi';
import { CompetitionWhereInputSchemaObject, CompetitionOrderByWithRelationInputSchemaObject, CompetitionWhereUniqueInputSchemaObject } from './objects';
import { CompetitionScalarFieldEnumSchema } from './enums'

export const CompetitionFindManySchema = Joi.object().keys({ where: Joi.object().keys(CompetitionWhereInputSchemaObject), orderBy: Joi.object().keys(CompetitionOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(CompetitionWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(CompetitionScalarFieldEnumSchema)  }).required()