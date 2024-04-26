import Joi from 'joi';
import { AchievementWhereUniqueInputSchemaObject } from './objects'

export const AchievementFindUniqueSchema = Joi.object().keys({ where: Joi.object().keys(AchievementWhereUniqueInputSchemaObject) }).required()