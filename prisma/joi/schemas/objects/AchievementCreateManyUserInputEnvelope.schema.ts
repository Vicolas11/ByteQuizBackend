// @ts-nocheck
import Joi from 'joi';
import { AchievementCreateManyUserInputSchemaObject } from './AchievementCreateManyUserInput.schema'

export const AchievementCreateManyUserInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(AchievementCreateManyUserInputSchemaObject),
Joi.array().items(Joi.object().keys(AchievementCreateManyUserInputSchemaObject))),
  skipDuplicates: Joi.boolean()
}