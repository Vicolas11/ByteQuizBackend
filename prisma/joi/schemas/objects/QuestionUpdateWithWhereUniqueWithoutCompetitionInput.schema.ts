// @ts-nocheck
import Joi from 'joi';
import { QuestionWhereUniqueInputSchemaObject } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithoutCompetitionInputSchemaObject } from './QuestionUpdateWithoutCompetitionInput.schema';
import { QuestionUncheckedUpdateWithoutCompetitionInputSchemaObject } from './QuestionUncheckedUpdateWithoutCompetitionInput.schema'

export const QuestionUpdateWithWhereUniqueWithoutCompetitionInputSchemaObject = {
    where: Joi.object().keys(QuestionWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(QuestionUpdateWithoutCompetitionInputSchemaObject),
Joi.object().keys(QuestionUncheckedUpdateWithoutCompetitionInputSchemaObject))
}