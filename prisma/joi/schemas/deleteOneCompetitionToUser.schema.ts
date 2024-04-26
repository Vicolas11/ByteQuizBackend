import Joi from 'joi';
import { CompetitionToUserWhereUniqueInputSchemaObject } from './objects'

export const CompetitionToUserDeleteOneSchema = Joi.object().keys({ where: Joi.object().keys(CompetitionToUserWhereUniqueInputSchemaObject)  }).required()