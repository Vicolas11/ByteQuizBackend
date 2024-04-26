import Joi from 'joi';
import { QuizUpdateManyMutationInputSchemaObject, QuizWhereInputSchemaObject } from './objects'

export const QuizUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(QuizUpdateManyMutationInputSchemaObject), where: Joi.object().keys(QuizWhereInputSchemaObject)  }).required()