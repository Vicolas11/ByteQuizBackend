// @ts-nocheck
import Joi from 'joi';
import { QuestionScalarWhereInputSchemaObject } from './QuestionScalarWhereInput.schema';
import { QuestionUpdateManyMutationInputSchemaObject } from './QuestionUpdateManyMutationInput.schema';
import { QuestionUncheckedUpdateManyWithoutQuestionInputSchemaObject } from './QuestionUncheckedUpdateManyWithoutQuestionInput.schema'

export const QuestionUpdateManyWithWhereWithoutUserInputSchemaObject = {
    where: Joi.object().keys(QuestionScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(QuestionUpdateManyMutationInputSchemaObject),
Joi.object().keys(QuestionUncheckedUpdateManyWithoutQuestionInputSchemaObject))
}