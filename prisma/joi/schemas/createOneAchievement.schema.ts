import Joi from 'joi';
import { AchievementCreateInputSchemaObject } from './objects'

export const AchievementCreateSchema = Joi.object().keys({ data: Joi.object().keys(AchievementCreateInputSchemaObject)  }).required()