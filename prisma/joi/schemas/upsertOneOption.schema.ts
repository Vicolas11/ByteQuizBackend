import Joi from 'joi';
import { OptionWhereUniqueInputSchemaObject, OptionCreateInputSchemaObject, OptionUpdateInputSchemaObject } from './objects'

export const OptionUpsertSchema = Joi.object().keys({ where: Joi.object().keys(OptionWhereUniqueInputSchemaObject), data: Joi.object().keys(OptionCreateInputSchemaObject), update: Joi.object().keys(OptionUpdateInputSchemaObject)  }).required()