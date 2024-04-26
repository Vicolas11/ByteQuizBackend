// @ts-nocheck
import Joi from 'joi';
import { QuestionWhereUniqueInputSchemaObject } from './QuestionWhereUniqueInput.schema';
import { QuestionCreateWithoutQuizInputSchemaObject } from './QuestionCreateWithoutQuizInput.schema';
import { QuestionUncheckedCreateWithoutQuizInputSchemaObject } from './QuestionUncheckedCreateWithoutQuizInput.schema'

export const QuestionCreateOrConnectWithoutQuizInputSchemaObject = {
    where: Joi.object().keys(QuestionWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(QuestionCreateWithoutQuizInputSchemaObject),
Joi.object().keys(QuestionUncheckedCreateWithoutQuizInputSchemaObject))
}