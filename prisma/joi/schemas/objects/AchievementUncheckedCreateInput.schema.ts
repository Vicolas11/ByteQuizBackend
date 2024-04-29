// @ts-nocheck
import Joi from 'joi';


export const AchievementUncheckedCreateInputSchemaObject = {
    id: Joi.string(),
  title: Joi.string().required(),
  medalImg: Joi.string().required(),
  userId: Joi.alternatives().try(Joi.string()),
  createdAt: Joi.date()
}