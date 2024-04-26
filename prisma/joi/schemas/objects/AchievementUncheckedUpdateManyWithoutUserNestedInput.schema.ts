// @ts-nocheck
import Joi from 'joi';
import { AchievementCreateWithoutUserInputSchemaObject } from './AchievementCreateWithoutUserInput.schema';
import { AchievementUncheckedCreateWithoutUserInputSchemaObject } from './AchievementUncheckedCreateWithoutUserInput.schema';
import { AchievementCreateOrConnectWithoutUserInputSchemaObject } from './AchievementCreateOrConnectWithoutUserInput.schema';
import { AchievementUpsertWithWhereUniqueWithoutUserInputSchemaObject } from './AchievementUpsertWithWhereUniqueWithoutUserInput.schema';
import { AchievementCreateManyUserInputEnvelopeSchemaObject } from './AchievementCreateManyUserInputEnvelope.schema';
import { AchievementWhereUniqueInputSchemaObject } from './AchievementWhereUniqueInput.schema';
import { AchievementUpdateWithWhereUniqueWithoutUserInputSchemaObject } from './AchievementUpdateWithWhereUniqueWithoutUserInput.schema';
import { AchievementUpdateManyWithWhereWithoutUserInputSchemaObject } from './AchievementUpdateManyWithWhereWithoutUserInput.schema';
import { AchievementScalarWhereInputSchemaObject } from './AchievementScalarWhereInput.schema'

export const AchievementUncheckedUpdateManyWithoutUserNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(AchievementCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(AchievementCreateWithoutUserInputSchemaObject)),
Joi.object().keys(AchievementUncheckedCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(AchievementUncheckedCreateWithoutUserInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(AchievementCreateOrConnectWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(AchievementCreateOrConnectWithoutUserInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(AchievementUpsertWithWhereUniqueWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(AchievementUpsertWithWhereUniqueWithoutUserInputSchemaObject))),
  createMany: Joi.object().keys(AchievementCreateManyUserInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(AchievementWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(AchievementWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(AchievementWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(AchievementWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(AchievementWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(AchievementWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(AchievementWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(AchievementWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(AchievementUpdateWithWhereUniqueWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(AchievementUpdateWithWhereUniqueWithoutUserInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(AchievementUpdateManyWithWhereWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(AchievementUpdateManyWithWhereWithoutUserInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(AchievementScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(AchievementScalarWhereInputSchemaObject)))
}