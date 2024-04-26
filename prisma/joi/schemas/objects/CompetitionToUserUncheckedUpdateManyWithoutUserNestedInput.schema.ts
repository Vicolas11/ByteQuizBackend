// @ts-nocheck
import Joi from 'joi';
import { CompetitionToUserCreateWithoutUserInputSchemaObject } from './CompetitionToUserCreateWithoutUserInput.schema';
import { CompetitionToUserUncheckedCreateWithoutUserInputSchemaObject } from './CompetitionToUserUncheckedCreateWithoutUserInput.schema';
import { CompetitionToUserCreateOrConnectWithoutUserInputSchemaObject } from './CompetitionToUserCreateOrConnectWithoutUserInput.schema';
import { CompetitionToUserUpsertWithWhereUniqueWithoutUserInputSchemaObject } from './CompetitionToUserUpsertWithWhereUniqueWithoutUserInput.schema';
import { CompetitionToUserCreateManyUserInputEnvelopeSchemaObject } from './CompetitionToUserCreateManyUserInputEnvelope.schema';
import { CompetitionToUserWhereUniqueInputSchemaObject } from './CompetitionToUserWhereUniqueInput.schema';
import { CompetitionToUserUpdateWithWhereUniqueWithoutUserInputSchemaObject } from './CompetitionToUserUpdateWithWhereUniqueWithoutUserInput.schema';
import { CompetitionToUserUpdateManyWithWhereWithoutUserInputSchemaObject } from './CompetitionToUserUpdateManyWithWhereWithoutUserInput.schema';
import { CompetitionToUserScalarWhereInputSchemaObject } from './CompetitionToUserScalarWhereInput.schema'

export const CompetitionToUserUncheckedUpdateManyWithoutUserNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(CompetitionToUserCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionToUserCreateWithoutUserInputSchemaObject)),
Joi.object().keys(CompetitionToUserUncheckedCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionToUserUncheckedCreateWithoutUserInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(CompetitionToUserCreateOrConnectWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionToUserCreateOrConnectWithoutUserInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(CompetitionToUserUpsertWithWhereUniqueWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionToUserUpsertWithWhereUniqueWithoutUserInputSchemaObject))),
  createMany: Joi.object().keys(CompetitionToUserCreateManyUserInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(CompetitionToUserWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionToUserWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(CompetitionToUserWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionToUserWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(CompetitionToUserWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionToUserWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(CompetitionToUserWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionToUserWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(CompetitionToUserUpdateWithWhereUniqueWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionToUserUpdateWithWhereUniqueWithoutUserInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(CompetitionToUserUpdateManyWithWhereWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionToUserUpdateManyWithWhereWithoutUserInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(CompetitionToUserScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionToUserScalarWhereInputSchemaObject)))
}