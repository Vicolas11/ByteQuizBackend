// @ts-nocheck
import Joi from 'joi';
import { AchievementWhereUniqueInputSchemaObject } from './AchievementWhereUniqueInput.schema';
import { AchievementUpdateWithoutUserInputSchemaObject } from './AchievementUpdateWithoutUserInput.schema';
import { AchievementUncheckedUpdateWithoutUserInputSchemaObject } from './AchievementUncheckedUpdateWithoutUserInput.schema';
import { AchievementCreateWithoutUserInputSchemaObject } from './AchievementCreateWithoutUserInput.schema';
import { AchievementUncheckedCreateWithoutUserInputSchemaObject } from './AchievementUncheckedCreateWithoutUserInput.schema'

export const AchievementUpsertWithWhereUniqueWithoutUserInputSchemaObject = {
    where: Joi.object().keys(AchievementWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(AchievementUpdateWithoutUserInputSchemaObject),
Joi.object().keys(AchievementUncheckedUpdateWithoutUserInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(AchievementCreateWithoutUserInputSchemaObject),
Joi.object().keys(AchievementUncheckedCreateWithoutUserInputSchemaObject))
}