// @ts-nocheck
import Joi from 'joi';
import { QuizScalarWhereInputSchemaObject } from './QuizScalarWhereInput.schema';
import { QuizUpdateManyMutationInputSchemaObject } from './QuizUpdateManyMutationInput.schema';
import { QuizUncheckedUpdateManyWithoutQuizInputSchemaObject } from './QuizUncheckedUpdateManyWithoutQuizInput.schema'

export const QuizUpdateManyWithWhereWithoutUserInputSchemaObject = {
    where: Joi.object().keys(QuizScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(QuizUpdateManyMutationInputSchemaObject),
Joi.object().keys(QuizUncheckedUpdateManyWithoutQuizInputSchemaObject))
}