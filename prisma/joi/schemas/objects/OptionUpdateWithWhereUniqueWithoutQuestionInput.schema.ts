// @ts-nocheck
import Joi from 'joi';
import { OptionWhereUniqueInputSchemaObject } from './OptionWhereUniqueInput.schema';
import { OptionUpdateWithoutQuestionInputSchemaObject } from './OptionUpdateWithoutQuestionInput.schema';
import { OptionUncheckedUpdateWithoutQuestionInputSchemaObject } from './OptionUncheckedUpdateWithoutQuestionInput.schema'

export const OptionUpdateWithWhereUniqueWithoutQuestionInputSchemaObject = {
    where: Joi.object().keys(OptionWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(OptionUpdateWithoutQuestionInputSchemaObject),
Joi.object().keys(OptionUncheckedUpdateWithoutQuestionInputSchemaObject))
}