import Joi from 'joi';
import { CompetitionUpdateInputSchemaObject, CompetitionWhereUniqueInputSchemaObject } from './objects'

export const CompetitionUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(CompetitionUpdateInputSchemaObject), where: Joi.object().keys(CompetitionWhereUniqueInputSchemaObject)  }).required()