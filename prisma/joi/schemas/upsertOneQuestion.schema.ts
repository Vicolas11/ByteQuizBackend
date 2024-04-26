import Joi from 'joi';
import { QuestionWhereUniqueInputSchemaObject, QuestionCreateInputSchemaObject, QuestionUpdateInputSchemaObject } from './objects'

export const QuestionUpsertSchema = Joi.object().keys({ where: Joi.object().keys(QuestionWhereUniqueInputSchemaObject), data: Joi.object().keys(QuestionCreateInputSchemaObject), update: Joi.object().keys(QuestionUpdateInputSchemaObject)  }).required()