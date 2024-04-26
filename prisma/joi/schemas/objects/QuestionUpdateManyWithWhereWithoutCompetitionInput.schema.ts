// @ts-nocheck
import Joi from 'joi';
import { QuestionScalarWhereInputSchemaObject } from './QuestionScalarWhereInput.schema';
import { QuestionUpdateManyMutationInputSchemaObject } from './QuestionUpdateManyMutationInput.schema';
import { QuestionUncheckedUpdateManyWithoutQuestionsInputSchemaObject } from './QuestionUncheckedUpdateManyWithoutQuestionsInput.schema'

export const QuestionUpdateManyWithWhereWithoutCompetitionInputSchemaObject = {
    where: Joi.object().keys(QuestionScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(QuestionUpdateManyMutationInputSchemaObject),
Joi.object().keys(QuestionUncheckedUpdateManyWithoutQuestionsInputSchemaObject))
}