// @ts-nocheck
import Joi from 'joi';
import { OptionWhereUniqueInputSchemaObject } from './OptionWhereUniqueInput.schema';
import { OptionUpdateWithoutQuestionInputSchemaObject } from './OptionUpdateWithoutQuestionInput.schema';
import { OptionUncheckedUpdateWithoutQuestionInputSchemaObject } from './OptionUncheckedUpdateWithoutQuestionInput.schema';
import { OptionCreateWithoutQuestionInputSchemaObject } from './OptionCreateWithoutQuestionInput.schema';
import { OptionUncheckedCreateWithoutQuestionInputSchemaObject } from './OptionUncheckedCreateWithoutQuestionInput.schema'

export const OptionUpsertWithWhereUniqueWithoutQuestionInputSchemaObject = {
    where: Joi.object().keys(OptionWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(OptionUpdateWithoutQuestionInputSchemaObject),
Joi.object().keys(OptionUncheckedUpdateWithoutQuestionInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(OptionCreateWithoutQuestionInputSchemaObject),
Joi.object().keys(OptionUncheckedCreateWithoutQuestionInputSchemaObject))
}