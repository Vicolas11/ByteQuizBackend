// @ts-nocheck
import Joi from 'joi';
import { LeaderboardCreateWithoutUserInputSchemaObject } from './LeaderboardCreateWithoutUserInput.schema';
import { LeaderboardUncheckedCreateWithoutUserInputSchemaObject } from './LeaderboardUncheckedCreateWithoutUserInput.schema';
import { LeaderboardCreateOrConnectWithoutUserInputSchemaObject } from './LeaderboardCreateOrConnectWithoutUserInput.schema';
import { LeaderboardUpsertWithWhereUniqueWithoutUserInputSchemaObject } from './LeaderboardUpsertWithWhereUniqueWithoutUserInput.schema';
import { LeaderboardCreateManyUserInputEnvelopeSchemaObject } from './LeaderboardCreateManyUserInputEnvelope.schema';
import { LeaderboardWhereUniqueInputSchemaObject } from './LeaderboardWhereUniqueInput.schema';
import { LeaderboardUpdateWithWhereUniqueWithoutUserInputSchemaObject } from './LeaderboardUpdateWithWhereUniqueWithoutUserInput.schema';
import { LeaderboardUpdateManyWithWhereWithoutUserInputSchemaObject } from './LeaderboardUpdateManyWithWhereWithoutUserInput.schema';
import { LeaderboardScalarWhereInputSchemaObject } from './LeaderboardScalarWhereInput.schema'

export const LeaderboardUpdateManyWithoutUserNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(LeaderboardCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(LeaderboardCreateWithoutUserInputSchemaObject)),
Joi.object().keys(LeaderboardUncheckedCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(LeaderboardUncheckedCreateWithoutUserInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(LeaderboardCreateOrConnectWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(LeaderboardCreateOrConnectWithoutUserInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(LeaderboardUpsertWithWhereUniqueWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(LeaderboardUpsertWithWhereUniqueWithoutUserInputSchemaObject))),
  createMany: Joi.object().keys(LeaderboardCreateManyUserInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(LeaderboardWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(LeaderboardWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(LeaderboardWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(LeaderboardWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(LeaderboardWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(LeaderboardWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(LeaderboardWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(LeaderboardWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(LeaderboardUpdateWithWhereUniqueWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(LeaderboardUpdateWithWhereUniqueWithoutUserInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(LeaderboardUpdateManyWithWhereWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(LeaderboardUpdateManyWithWhereWithoutUserInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(LeaderboardScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(LeaderboardScalarWhereInputSchemaObject)))
}