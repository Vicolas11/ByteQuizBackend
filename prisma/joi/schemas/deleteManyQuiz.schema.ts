import Joi from 'joi';
import { QuizWhereInputSchemaObject } from './objects'

export const QuizDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(QuizWhereInputSchemaObject)  }).required()