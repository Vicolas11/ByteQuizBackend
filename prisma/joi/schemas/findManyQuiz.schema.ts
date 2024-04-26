import Joi from 'joi';
import { QuizWhereInputSchemaObject, QuizOrderByWithRelationInputSchemaObject, QuizWhereUniqueInputSchemaObject } from './objects';
import { QuizScalarFieldEnumSchema } from './enums'

export const QuizFindManySchema = Joi.object().keys({ where: Joi.object().keys(QuizWhereInputSchemaObject), orderBy: Joi.object().keys(QuizOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(QuizWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(QuizScalarFieldEnumSchema)  }).required()