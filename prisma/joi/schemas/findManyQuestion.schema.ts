import Joi from 'joi';
import { QuestionWhereInputSchemaObject, QuestionOrderByWithRelationInputSchemaObject, QuestionWhereUniqueInputSchemaObject } from './objects';
import { QuestionScalarFieldEnumSchema } from './enums'

export const QuestionFindManySchema = Joi.object().keys({ where: Joi.object().keys(QuestionWhereInputSchemaObject), orderBy: Joi.object().keys(QuestionOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(QuestionWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(QuestionScalarFieldEnumSchema)  }).required()