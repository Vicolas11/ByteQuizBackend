// @ts-nocheck
import Joi from 'joi';
import { CompetitionToUserCreateWithoutCompetitionInputSchemaObject } from './CompetitionToUserCreateWithoutCompetitionInput.schema';
import { CompetitionToUserUncheckedCreateWithoutCompetitionInputSchemaObject } from './CompetitionToUserUncheckedCreateWithoutCompetitionInput.schema';
import { CompetitionToUserCreateOrConnectWithoutCompetitionInputSchemaObject } from './CompetitionToUserCreateOrConnectWithoutCompetitionInput.schema';
import { CompetitionToUserUpsertWithWhereUniqueWithoutCompetitionInputSchemaObject } from './CompetitionToUserUpsertWithWhereUniqueWithoutCompetitionInput.schema';
import { CompetitionToUserCreateManyCompetitionInputEnvelopeSchemaObject } from './CompetitionToUserCreateManyCompetitionInputEnvelope.schema';
import { CompetitionToUserWhereUniqueInputSchemaObject } from './CompetitionToUserWhereUniqueInput.schema';
import { CompetitionToUserUpdateWithWhereUniqueWithoutCompetitionInputSchemaObject } from './CompetitionToUserUpdateWithWhereUniqueWithoutCompetitionInput.schema';
import { CompetitionToUserUpdateManyWithWhereWithoutCompetitionInputSchemaObject } from './CompetitionToUserUpdateManyWithWhereWithoutCompetitionInput.schema';
import { CompetitionToUserScalarWhereInputSchemaObject } from './CompetitionToUserScalarWhereInput.schema'

export const CompetitionToUserUpdateManyWithoutCompetitionNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(CompetitionToUserCreateWithoutCompetitionInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionToUserCreateWithoutCompetitionInputSchemaObject)),
Joi.object().keys(CompetitionToUserUncheckedCreateWithoutCompetitionInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionToUserUncheckedCreateWithoutCompetitionInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(CompetitionToUserCreateOrConnectWithoutCompetitionInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionToUserCreateOrConnectWithoutCompetitionInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(CompetitionToUserUpsertWithWhereUniqueWithoutCompetitionInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionToUserUpsertWithWhereUniqueWithoutCompetitionInputSchemaObject))),
  createMany: Joi.object().keys(CompetitionToUserCreateManyCompetitionInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(CompetitionToUserWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionToUserWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(CompetitionToUserWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionToUserWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(CompetitionToUserWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionToUserWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(CompetitionToUserWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionToUserWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(CompetitionToUserUpdateWithWhereUniqueWithoutCompetitionInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionToUserUpdateWithWhereUniqueWithoutCompetitionInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(CompetitionToUserUpdateManyWithWhereWithoutCompetitionInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionToUserUpdateManyWithWhereWithoutCompetitionInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(CompetitionToUserScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionToUserScalarWhereInputSchemaObject)))
}