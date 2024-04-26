import Joi from 'joi';
import { AchievementUpdateManyMutationInputSchemaObject, AchievementWhereInputSchemaObject } from './objects'

export const AchievementUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(AchievementUpdateManyMutationInputSchemaObject), where: Joi.object().keys(AchievementWhereInputSchemaObject)  }).required()