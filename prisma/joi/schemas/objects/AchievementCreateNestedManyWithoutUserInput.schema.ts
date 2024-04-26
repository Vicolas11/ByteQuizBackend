// @ts-nocheck
import Joi from 'joi';
import { AchievementCreateWithoutUserInputSchemaObject } from './AchievementCreateWithoutUserInput.schema';
import { AchievementUncheckedCreateWithoutUserInputSchemaObject } from './AchievementUncheckedCreateWithoutUserInput.schema';
import { AchievementCreateOrConnectWithoutUserInputSchemaObject } from './AchievementCreateOrConnectWithoutUserInput.schema';
import { AchievementCreateManyUserInputEnvelopeSchemaObject } from './AchievementCreateManyUserInputEnvelope.schema';
import { AchievementWhereUniqueInputSchemaObject } from './AchievementWhereUniqueInput.schema'

export const AchievementCreateNestedManyWithoutUserInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(AchievementCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(AchievementCreateWithoutUserInputSchemaObject)),
Joi.object().keys(AchievementUncheckedCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(AchievementUncheckedCreateWithoutUserInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(AchievementCreateOrConnectWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(AchievementCreateOrConnectWithoutUserInputSchemaObject))),
  createMany: Joi.object().keys(AchievementCreateManyUserInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(AchievementWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(AchievementWhereUniqueInputSchemaObject)))
}