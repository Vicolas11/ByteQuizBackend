import Joi from 'joi';
import { QuizCreateInputSchemaObject } from './objects'

export const QuizCreateSchema = Joi.object().keys({ data: Joi.object().keys(QuizCreateInputSchemaObject)  }).required()