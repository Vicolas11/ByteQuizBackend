// @ts-nocheck
import Joi from 'joi';
import { AchievementWhereInputSchemaObject } from './AchievementWhereInput.schema'

export const AchievementListRelationFilterSchemaObject = {
    every: Joi.object().keys(AchievementWhereInputSchemaObject),
  some: Joi.object().keys(AchievementWhereInputSchemaObject),
  none: Joi.object().keys(AchievementWhereInputSchemaObject)
}