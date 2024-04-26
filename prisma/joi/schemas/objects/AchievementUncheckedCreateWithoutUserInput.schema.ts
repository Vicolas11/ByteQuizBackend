// @ts-nocheck
import Joi from 'joi';


export const AchievementUncheckedCreateWithoutUserInputSchemaObject = {
    id: Joi.string(),
  title: Joi.string().required(),
  medalImg: Joi.string().required()
}