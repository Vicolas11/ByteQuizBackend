// @ts-nocheck
import Joi from 'joi';
import { AchievementScalarWhereInputSchemaObject } from './AchievementScalarWhereInput.schema';
import { AchievementUpdateManyMutationInputSchemaObject } from './AchievementUpdateManyMutationInput.schema';
import { AchievementUncheckedUpdateManyWithoutAchievementInputSchemaObject } from './AchievementUncheckedUpdateManyWithoutAchievementInput.schema'

export const AchievementUpdateManyWithWhereWithoutUserInputSchemaObject = {
    where: Joi.object().keys(AchievementScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(AchievementUpdateManyMutationInputSchemaObject),
Joi.object().keys(AchievementUncheckedUpdateManyWithoutAchievementInputSchemaObject))
}