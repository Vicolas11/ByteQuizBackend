// @ts-nocheck
import Joi from 'joi';


export const AchievementCreateManyUserInputSchemaObject = {
    id: Joi.string(),
  title: Joi.string().required(),
  medalImg: Joi.string().required()
}