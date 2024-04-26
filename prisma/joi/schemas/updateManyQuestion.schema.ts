import Joi from 'joi';
import { QuestionUpdateManyMutationInputSchemaObject, QuestionWhereInputSchemaObject } from './objects'

export const QuestionUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(QuestionUpdateManyMutationInputSchemaObject), where: Joi.object().keys(QuestionWhereInputSchemaObject)  }).required()