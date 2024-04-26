// @ts-nocheck
import Joi from 'joi';
import { CompetitionToUserCreateWithoutUserInputSchemaObject } from './CompetitionToUserCreateWithoutUserInput.schema';
import { CompetitionToUserUncheckedCreateWithoutUserInputSchemaObject } from './CompetitionToUserUncheckedCreateWithoutUserInput.schema';
import { CompetitionToUserCreateOrConnectWithoutUserInputSchemaObject } from './CompetitionToUserCreateOrConnectWithoutUserInput.schema';
import { CompetitionToUserCreateManyUserInputEnvelopeSchemaObject } from './CompetitionToUserCreateManyUserInputEnvelope.schema';
import { CompetitionToUserWhereUniqueInputSchemaObject } from './CompetitionToUserWhereUniqueInput.schema'

export const CompetitionToUserCreateNestedManyWithoutUserInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(CompetitionToUserCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionToUserCreateWithoutUserInputSchemaObject)),
Joi.object().keys(CompetitionToUserUncheckedCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionToUserUncheckedCreateWithoutUserInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(CompetitionToUserCreateOrConnectWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionToUserCreateOrConnectWithoutUserInputSchemaObject))),
  createMany: Joi.object().keys(CompetitionToUserCreateManyUserInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(CompetitionToUserWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionToUserWhereUniqueInputSchemaObject)))
}