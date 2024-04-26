import Joi from 'joi';
import { CompetitionUpdateManyMutationInputSchemaObject, CompetitionWhereInputSchemaObject } from './objects'

export const CompetitionUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(CompetitionUpdateManyMutationInputSchemaObject), where: Joi.object().keys(CompetitionWhereInputSchemaObject)  }).required()