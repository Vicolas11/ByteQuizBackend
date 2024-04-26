import Joi from 'joi';
import { CompetitionToUserUpdateInputSchemaObject, CompetitionToUserWhereUniqueInputSchemaObject } from './objects'

export const CompetitionToUserUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(CompetitionToUserUpdateInputSchemaObject), where: Joi.object().keys(CompetitionToUserWhereUniqueInputSchemaObject)  }).required()