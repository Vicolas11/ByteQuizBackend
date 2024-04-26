import Joi from 'joi';
import { CompetitionWhereUniqueInputSchemaObject } from './objects'

export const CompetitionDeleteOneSchema = Joi.object().keys({ where: Joi.object().keys(CompetitionWhereUniqueInputSchemaObject)  }).required()