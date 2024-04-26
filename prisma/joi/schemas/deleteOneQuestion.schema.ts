import Joi from 'joi';
import { QuestionWhereUniqueInputSchemaObject } from './objects'

export const QuestionDeleteOneSchema = Joi.object().keys({ where: Joi.object().keys(QuestionWhereUniqueInputSchemaObject)  }).required()