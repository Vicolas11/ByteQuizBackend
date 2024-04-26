// @ts-nocheck
import Joi from 'joi';
import { AchievementWhereUniqueInputSchemaObject } from './AchievementWhereUniqueInput.schema';
import { AchievementCreateWithoutUserInputSchemaObject } from './AchievementCreateWithoutUserInput.schema';
import { AchievementUncheckedCreateWithoutUserInputSchemaObject } from './AchievementUncheckedCreateWithoutUserInput.schema'

export const AchievementCreateOrConnectWithoutUserInputSchemaObject = {
    where: Joi.object().keys(AchievementWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(AchievementCreateWithoutUserInputSchemaObject),
Joi.object().keys(AchievementUncheckedCreateWithoutUserInputSchemaObject))
}