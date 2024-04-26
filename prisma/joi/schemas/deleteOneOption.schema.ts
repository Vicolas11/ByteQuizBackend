import Joi from 'joi';
import { OptionWhereUniqueInputSchemaObject } from './objects'

export const OptionDeleteOneSchema = Joi.object().keys({ where: Joi.object().keys(OptionWhereUniqueInputSchemaObject)  }).required()