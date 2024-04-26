// @ts-nocheck
import Joi from 'joi';
import { LeaderboardCreateWithoutCompetitionInputSchemaObject } from './LeaderboardCreateWithoutCompetitionInput.schema';
import { LeaderboardUncheckedCreateWithoutCompetitionInputSchemaObject } from './LeaderboardUncheckedCreateWithoutCompetitionInput.schema';
import { LeaderboardCreateOrConnectWithoutCompetitionInputSchemaObject } from './LeaderboardCreateOrConnectWithoutCompetitionInput.schema';
import { LeaderboardCreateManyCompetitionInputEnvelopeSchemaObject } from './LeaderboardCreateManyCompetitionInputEnvelope.schema';
import { LeaderboardWhereUniqueInputSchemaObject } from './LeaderboardWhereUniqueInput.schema'

export const LeaderboardUncheckedCreateNestedManyWithoutCompetitionInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(LeaderboardCreateWithoutCompetitionInputSchemaObject),
Joi.array().items(Joi.object().keys(LeaderboardCreateWithoutCompetitionInputSchemaObject)),
Joi.object().keys(LeaderboardUncheckedCreateWithoutCompetitionInputSchemaObject),
Joi.array().items(Joi.object().keys(LeaderboardUncheckedCreateWithoutCompetitionInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(LeaderboardCreateOrConnectWithoutCompetitionInputSchemaObject),
Joi.array().items(Joi.object().keys(LeaderboardCreateOrConnectWithoutCompetitionInputSchemaObject))),
  createMany: Joi.object().keys(LeaderboardCreateManyCompetitionInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(LeaderboardWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(LeaderboardWhereUniqueInputSchemaObject)))
}