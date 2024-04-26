import Joi from 'joi';
import { OptionUpdateManyMutationInputSchemaObject, OptionWhereInputSchemaObject } from './objects'

export const OptionUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(OptionUpdateManyMutationInputSchemaObject), where: Joi.object().keys(OptionWhereInputSchemaObject)  }).required()