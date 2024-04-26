import Joi from 'joi';
import { AchievementUpdateInputSchemaObject, AchievementWhereUniqueInputSchemaObject } from './objects'

export const AchievementUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(AchievementUpdateInputSchemaObject), where: Joi.object().keys(AchievementWhereUniqueInputSchemaObject)  }).required()