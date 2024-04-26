import Joi from 'joi';
import { AchievementWhereUniqueInputSchemaObject, AchievementCreateInputSchemaObject, AchievementUpdateInputSchemaObject } from './objects'

export const AchievementUpsertSchema = Joi.object().keys({ where: Joi.object().keys(AchievementWhereUniqueInputSchemaObject), data: Joi.object().keys(AchievementCreateInputSchemaObject), update: Joi.object().keys(AchievementUpdateInputSchemaObject)  }).required()