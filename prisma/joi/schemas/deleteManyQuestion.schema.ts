import Joi from 'joi';
import { QuestionWhereInputSchemaObject } from './objects'

export const QuestionDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(QuestionWhereInputSchemaObject)  }).required()