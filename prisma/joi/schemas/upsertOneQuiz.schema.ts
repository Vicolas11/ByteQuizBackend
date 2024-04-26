import Joi from 'joi';
import { QuizWhereUniqueInputSchemaObject, QuizCreateInputSchemaObject, QuizUpdateInputSchemaObject } from './objects'

export const QuizUpsertSchema = Joi.object().keys({ where: Joi.object().keys(QuizWhereUniqueInputSchemaObject), data: Joi.object().keys(QuizCreateInputSchemaObject), update: Joi.object().keys(QuizUpdateInputSchemaObject)  }).required()