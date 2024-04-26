import Joi from 'joi';
import { QuizWhereUniqueInputSchemaObject } from './objects'

export const QuizFindUniqueSchema = Joi.object().keys({ where: Joi.object().keys(QuizWhereUniqueInputSchemaObject) }).required()