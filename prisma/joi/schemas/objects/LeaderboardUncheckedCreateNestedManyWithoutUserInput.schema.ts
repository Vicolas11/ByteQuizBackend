// @ts-nocheck
import Joi from 'joi';
import { LeaderboardCreateWithoutUserInputSchemaObject } from './LeaderboardCreateWithoutUserInput.schema';
import { LeaderboardUncheckedCreateWithoutUserInputSchemaObject } from './LeaderboardUncheckedCreateWithoutUserInput.schema';
import { LeaderboardCreateOrConnectWithoutUserInputSchemaObject } from './LeaderboardCreateOrConnectWithoutUserInput.schema';
import { LeaderboardCreateManyUserInputEnvelopeSchemaObject } from './LeaderboardCreateManyUserInputEnvelope.schema';
import { LeaderboardWhereUniqueInputSchemaObject } from './LeaderboardWhereUniqueInput.schema'

export const LeaderboardUncheckedCreateNestedManyWithoutUserInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(LeaderboardCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(LeaderboardCreateWithoutUserInputSchemaObject)),
Joi.object().keys(LeaderboardUncheckedCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(LeaderboardUncheckedCreateWithoutUserInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(LeaderboardCreateOrConnectWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(LeaderboardCreateOrConnectWithoutUserInputSchemaObject))),
  createMany: Joi.object().keys(LeaderboardCreateManyUserInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(LeaderboardWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(LeaderboardWhereUniqueInputSchemaObject)))
}