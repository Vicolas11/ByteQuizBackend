// @ts-nocheck
import Joi from 'joi';
import { LeaderboardCreateWithoutCompetitionInputSchemaObject } from './LeaderboardCreateWithoutCompetitionInput.schema';
import { LeaderboardUncheckedCreateWithoutCompetitionInputSchemaObject } from './LeaderboardUncheckedCreateWithoutCompetitionInput.schema';
import { LeaderboardCreateOrConnectWithoutCompetitionInputSchemaObject } from './LeaderboardCreateOrConnectWithoutCompetitionInput.schema';
import { LeaderboardUpsertWithWhereUniqueWithoutCompetitionInputSchemaObject } from './LeaderboardUpsertWithWhereUniqueWithoutCompetitionInput.schema';
import { LeaderboardCreateManyCompetitionInputEnvelopeSchemaObject } from './LeaderboardCreateManyCompetitionInputEnvelope.schema';
import { LeaderboardWhereUniqueInputSchemaObject } from './LeaderboardWhereUniqueInput.schema';
import { LeaderboardUpdateWithWhereUniqueWithoutCompetitionInputSchemaObject } from './LeaderboardUpdateWithWhereUniqueWithoutCompetitionInput.schema';
import { LeaderboardUpdateManyWithWhereWithoutCompetitionInputSchemaObject } from './LeaderboardUpdateManyWithWhereWithoutCompetitionInput.schema';
import { LeaderboardScalarWhereInputSchemaObject } from './LeaderboardScalarWhereInput.schema'

export const LeaderboardUncheckedUpdateManyWithoutCompetitionNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(LeaderboardCreateWithoutCompetitionInputSchemaObject),
Joi.array().items(Joi.object().keys(LeaderboardCreateWithoutCompetitionInputSchemaObject)),
Joi.object().keys(LeaderboardUncheckedCreateWithoutCompetitionInputSchemaObject),
Joi.array().items(Joi.object().keys(LeaderboardUncheckedCreateWithoutCompetitionInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(LeaderboardCreateOrConnectWithoutCompetitionInputSchemaObject),
Joi.array().items(Joi.object().keys(LeaderboardCreateOrConnectWithoutCompetitionInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(LeaderboardUpsertWithWhereUniqueWithoutCompetitionInputSchemaObject),
Joi.array().items(Joi.object().keys(LeaderboardUpsertWithWhereUniqueWithoutCompetitionInputSchemaObject))),
  createMany: Joi.object().keys(LeaderboardCreateManyCompetitionInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(LeaderboardWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(LeaderboardWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(LeaderboardWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(LeaderboardWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(LeaderboardWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(LeaderboardWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(LeaderboardWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(LeaderboardWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(LeaderboardUpdateWithWhereUniqueWithoutCompetitionInputSchemaObject),
Joi.array().items(Joi.object().keys(LeaderboardUpdateWithWhereUniqueWithoutCompetitionInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(LeaderboardUpdateManyWithWhereWithoutCompetitionInputSchemaObject),
Joi.array().items(Joi.object().keys(LeaderboardUpdateManyWithWhereWithoutCompetitionInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(LeaderboardScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(LeaderboardScalarWhereInputSchemaObject)))
}