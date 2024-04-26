import Joi from 'joi';
import { QuizWhereUniqueInputSchemaObject } from './objects'

export const QuizDeleteOneSchema = Joi.object().keys({ where: Joi.object().keys(QuizWhereUniqueInputSchemaObject)  }).required()