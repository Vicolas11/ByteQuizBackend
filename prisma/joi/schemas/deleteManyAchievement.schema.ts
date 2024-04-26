import Joi from 'joi';
import { AchievementWhereInputSchemaObject } from './objects'

export const AchievementDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(AchievementWhereInputSchemaObject)  }).required()