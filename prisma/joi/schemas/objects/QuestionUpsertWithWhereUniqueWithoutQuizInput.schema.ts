// @ts-nocheck
import Joi from 'joi';
import { QuestionWhereUniqueInputSchemaObject } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithoutQuizInputSchemaObject } from './QuestionUpdateWithoutQuizInput.schema';
import { QuestionUncheckedUpdateWithoutQuizInputSchemaObject } from './QuestionUncheckedUpdateWithoutQuizInput.schema';
import { QuestionCreateWithoutQuizInputSchemaObject } from './QuestionCreateWithoutQuizInput.schema';
import { QuestionUncheckedCreateWithoutQuizInputSchemaObject } from './QuestionUncheckedCreateWithoutQuizInput.schema'

export const QuestionUpsertWithWhereUniqueWithoutQuizInputSchemaObject = {
    where: Joi.object().keys(QuestionWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(QuestionUpdateWithoutQuizInputSchemaObject),
Joi.object().keys(QuestionUncheckedUpdateWithoutQuizInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(QuestionCreateWithoutQuizInputSchemaObject),
Joi.object().keys(QuestionUncheckedCreateWithoutQuizInputSchemaObject))
}