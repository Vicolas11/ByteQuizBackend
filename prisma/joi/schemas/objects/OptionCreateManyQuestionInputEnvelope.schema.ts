// @ts-nocheck
import Joi from 'joi';
import { OptionCreateManyQuestionInputSchemaObject } from './OptionCreateManyQuestionInput.schema'

export const OptionCreateManyQuestionInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(OptionCreateManyQuestionInputSchemaObject),
Joi.array().items(Joi.object().keys(OptionCreateManyQuestionInputSchemaObject))),
  skipDuplicates: Joi.boolean()
}