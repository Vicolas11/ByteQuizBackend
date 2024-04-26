import Joi from 'joi';
import { QuestionWhereInputSchemaObject, QuestionOrderByWithAggregationInputSchemaObject, QuestionScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { QuestionScalarFieldEnumSchema } from './enums'

export const QuestionGroupBySchema = Joi.object().keys({ where: Joi.object().keys(QuestionWhereInputSchemaObject), orderBy: Joi.object().keys(QuestionOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(QuestionScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(QuestionScalarFieldEnumSchema).required()  }).required()