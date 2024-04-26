// @ts-nocheck
import Joi from 'joi';
import { AchievementWhereUniqueInputSchemaObject } from './AchievementWhereUniqueInput.schema';
import { AchievementUpdateWithoutUserInputSchemaObject } from './AchievementUpdateWithoutUserInput.schema';
import { AchievementUncheckedUpdateWithoutUserInputSchemaObject } from './AchievementUncheckedUpdateWithoutUserInput.schema'

export const AchievementUpdateWithWhereUniqueWithoutUserInputSchemaObject = {
    where: Joi.object().keys(AchievementWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(AchievementUpdateWithoutUserInputSchemaObject),
Joi.object().keys(AchievementUncheckedUpdateWithoutUserInputSchemaObject))
}