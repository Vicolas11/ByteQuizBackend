import Joi from 'joi';
import { QuestionCreateInputSchemaObject } from './objects'

export const QuestionCreateSchema = Joi.object().keys({ data: Joi.object().keys(QuestionCreateInputSchemaObject)  }).required()