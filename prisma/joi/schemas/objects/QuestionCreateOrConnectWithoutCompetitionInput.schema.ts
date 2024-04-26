// @ts-nocheck
import Joi from 'joi';
import { QuestionWhereUniqueInputSchemaObject } from './QuestionWhereUniqueInput.schema';
import { QuestionCreateWithoutCompetitionInputSchemaObject } from './QuestionCreateWithoutCompetitionInput.schema';
import { QuestionUncheckedCreateWithoutCompetitionInputSchemaObject } from './QuestionUncheckedCreateWithoutCompetitionInput.schema'

export const QuestionCreateOrConnectWithoutCompetitionInputSchemaObject = {
    where: Joi.object().keys(QuestionWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(QuestionCreateWithoutCompetitionInputSchemaObject),
Joi.object().keys(QuestionUncheckedCreateWithoutCompetitionInputSchemaObject))
}