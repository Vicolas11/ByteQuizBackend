import Joi from 'joi';
import { QuestionWhereInputSchemaObject, QuestionOrderByWithRelationInputSchemaObject, QuestionWhereUniqueInputSchemaObject } from './objects'

export const QuestionAggregateSchema = Joi.object().keys({ where: Joi.object().keys(QuestionWhereInputSchemaObject), orderBy: Joi.object().keys(QuestionOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(QuestionWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number()  }).required()