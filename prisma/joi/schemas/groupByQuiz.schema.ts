import Joi from 'joi';
import { QuizWhereInputSchemaObject, QuizOrderByWithAggregationInputSchemaObject, QuizScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { QuizScalarFieldEnumSchema } from './enums'

export const QuizGroupBySchema = Joi.object().keys({ where: Joi.object().keys(QuizWhereInputSchemaObject), orderBy: Joi.object().keys(QuizOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(QuizScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(QuizScalarFieldEnumSchema).required()  }).required()