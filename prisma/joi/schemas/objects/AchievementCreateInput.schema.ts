// @ts-nocheck
import Joi from 'joi';
import { UserCreateNestedOneWithoutAchievementInputSchemaObject } from './UserCreateNestedOneWithoutAchievementInput.schema'

export const AchievementCreateInputSchemaObject = {
    id: Joi.string(),
  title: Joi.string().required(),
  medalImg: Joi.string().required(),
  User: Joi.object().keys(UserCreateNestedOneWithoutAchievementInputSchemaObject)
}