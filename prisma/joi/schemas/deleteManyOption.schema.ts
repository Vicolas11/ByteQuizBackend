import Joi from 'joi';
import { OptionWhereInputSchemaObject } from './objects'

export const OptionDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(OptionWhereInputSchemaObject)  }).required()