// @ts-nocheck
import Joi from 'joi';
import { CompetitionToUserCreateWithoutCompetitionInputSchemaObject } from './CompetitionToUserCreateWithoutCompetitionInput.schema';
import { CompetitionToUserUncheckedCreateWithoutCompetitionInputSchemaObject } from './CompetitionToUserUncheckedCreateWithoutCompetitionInput.schema';
import { CompetitionToUserCreateOrConnectWithoutCompetitionInputSchemaObject } from './CompetitionToUserCreateOrConnectWithoutCompetitionInput.schema';
import { CompetitionToUserCreateManyCompetitionInputEnvelopeSchemaObject } from './CompetitionToUserCreateManyCompetitionInputEnvelope.schema';
import { CompetitionToUserWhereUniqueInputSchemaObject } from './CompetitionToUserWhereUniqueInput.schema'

export const CompetitionToUserUncheckedCreateNestedManyWithoutCompetitionInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(CompetitionToUserCreateWithoutCompetitionInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionToUserCreateWithoutCompetitionInputSchemaObject)),
Joi.object().keys(CompetitionToUserUncheckedCreateWithoutCompetitionInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionToUserUncheckedCreateWithoutCompetitionInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(CompetitionToUserCreateOrConnectWithoutCompetitionInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionToUserCreateOrConnectWithoutCompetitionInputSchemaObject))),
  createMany: Joi.object().keys(CompetitionToUserCreateManyCompetitionInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(CompetitionToUserWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(CompetitionToUserWhereUniqueInputSchemaObject)))
}