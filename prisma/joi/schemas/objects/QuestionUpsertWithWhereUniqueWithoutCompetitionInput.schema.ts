// @ts-nocheck
import Joi from 'joi';
import { QuestionWhereUniqueInputSchemaObject } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithoutCompetitionInputSchemaObject } from './QuestionUpdateWithoutCompetitionInput.schema';
import { QuestionUncheckedUpdateWithoutCompetitionInputSchemaObject } from './QuestionUncheckedUpdateWithoutCompetitionInput.schema';
import { QuestionCreateWithoutCompetitionInputSchemaObject } from './QuestionCreateWithoutCompetitionInput.schema';
import { QuestionUncheckedCreateWithoutCompetitionInputSchemaObject } from './QuestionUncheckedCreateWithoutCompetitionInput.schema'

export const QuestionUpsertWithWhereUniqueWithoutCompetitionInputSchemaObject = {
    where: Joi.object().keys(QuestionWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(QuestionUpdateWithoutCompetitionInputSchemaObject),
Joi.object().keys(QuestionUncheckedUpdateWithoutCompetitionInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(QuestionCreateWithoutCompetitionInputSchemaObject),
Joi.object().keys(QuestionUncheckedCreateWithoutCompetitionInputSchemaObject))
}