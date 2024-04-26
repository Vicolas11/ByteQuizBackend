import Joi from 'joi';
import { CompetitionToUserUpdateManyMutationInputSchemaObject, CompetitionToUserWhereInputSchemaObject } from './objects'

export const CompetitionToUserUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(CompetitionToUserUpdateManyMutationInputSchemaObject), where: Joi.object().keys(CompetitionToUserWhereInputSchemaObject)  }).required()