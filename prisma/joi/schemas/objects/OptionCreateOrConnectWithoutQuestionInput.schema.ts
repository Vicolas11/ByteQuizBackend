// @ts-nocheck
import Joi from 'joi';
import { OptionWhereUniqueInputSchemaObject } from './OptionWhereUniqueInput.schema';
import { OptionCreateWithoutQuestionInputSchemaObject } from './OptionCreateWithoutQuestionInput.schema';
import { OptionUncheckedCreateWithoutQuestionInputSchemaObject } from './OptionUncheckedCreateWithoutQuestionInput.schema'

export const OptionCreateOrConnectWithoutQuestionInputSchemaObject = {
    where: Joi.object().keys(OptionWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(OptionCreateWithoutQuestionInputSchemaObject),
Joi.object().keys(OptionUncheckedCreateWithoutQuestionInputSchemaObject))
}