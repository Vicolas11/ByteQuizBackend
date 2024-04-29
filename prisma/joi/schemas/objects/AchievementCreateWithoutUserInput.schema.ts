// @ts-nocheck
import Joi from 'joi';


export const AchievementCreateWithoutUserInputSchemaObject = {
    id: Joi.string(),
  title: Joi.string().required(),
  medalImg: Joi.string().required(),
  createdAt: Joi.date()
}