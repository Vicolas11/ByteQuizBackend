// @ts-nocheck
import Joi from 'joi';
import { QuestionWhereUniqueInputSchemaObject } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithoutQuizInputSchemaObject } from './QuestionUpdateWithoutQuizInput.schema';
import { QuestionUncheckedUpdateWithoutQuizInputSchemaObject } from './QuestionUncheckedUpdateWithoutQuizInput.schema'

export const QuestionUpdateWithWhereUniqueWithoutQuizInputSchemaObject = {
    where: Joi.object().keys(QuestionWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(QuestionUpdateWithoutQuizInputSchemaObject),
Joi.object().keys(QuestionUncheckedUpdateWithoutQuizInputSchemaObject))
}