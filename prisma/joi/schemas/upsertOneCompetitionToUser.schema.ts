import Joi from 'joi';
import { CompetitionToUserWhereUniqueInputSchemaObject, CompetitionToUserCreateInputSchemaObject, CompetitionToUserUpdateInputSchemaObject } from './objects'

export const CompetitionToUserUpsertSchema = Joi.object().keys({ where: Joi.object().keys(CompetitionToUserWhereUniqueInputSchemaObject), data: Joi.object().keys(CompetitionToUserCreateInputSchemaObject), update: Joi.object().keys(CompetitionToUserUpdateInputSchemaObject)  }).required()