import Joi from 'joi';
import { QuestionUpdateInputSchemaObject, QuestionWhereUniqueInputSchemaObject } from './objects'

export const QuestionUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(QuestionUpdateInputSchemaObject), where: Joi.object().keys(QuestionWhereUniqueInputSchemaObject)  }).required()