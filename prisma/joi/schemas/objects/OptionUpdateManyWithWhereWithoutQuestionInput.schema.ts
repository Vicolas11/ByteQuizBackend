// @ts-nocheck
import Joi from 'joi';
import { OptionScalarWhereInputSchemaObject } from './OptionScalarWhereInput.schema';
import { OptionUpdateManyMutationInputSchemaObject } from './OptionUpdateManyMutationInput.schema';
import { OptionUncheckedUpdateManyWithoutOptionsInputSchemaObject } from './OptionUncheckedUpdateManyWithoutOptionsInput.schema'

export const OptionUpdateManyWithWhereWithoutQuestionInputSchemaObject = {
    where: Joi.object().keys(OptionScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(OptionUpdateManyMutationInputSchemaObject),
Joi.object().keys(OptionUncheckedUpdateManyWithoutOptionsInputSchemaObject))
}