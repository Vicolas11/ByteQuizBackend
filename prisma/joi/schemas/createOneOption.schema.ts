import Joi from 'joi';
import { OptionCreateInputSchemaObject } from './objects'

export const OptionCreateSchema = Joi.object().keys({ data: Joi.object().keys(OptionCreateInputSchemaObject)  }).required()