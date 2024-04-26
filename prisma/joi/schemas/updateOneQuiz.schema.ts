import Joi from 'joi';
import { QuizUpdateInputSchemaObject, QuizWhereUniqueInputSchemaObject } from './objects'

export const QuizUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(QuizUpdateInputSchemaObject), where: Joi.object().keys(QuizWhereUniqueInputSchemaObject)  }).required()