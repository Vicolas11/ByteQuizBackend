import Joi from 'joi';
import { OptionUpdateInputSchemaObject, OptionWhereUniqueInputSchemaObject } from './objects'

export const OptionUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(OptionUpdateInputSchemaObject), where: Joi.object().keys(OptionWhereUniqueInputSchemaObject)  }).required()