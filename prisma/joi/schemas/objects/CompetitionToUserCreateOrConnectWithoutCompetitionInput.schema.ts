// @ts-nocheck
import Joi from 'joi';
import { CompetitionToUserWhereUniqueInputSchemaObject } from './CompetitionToUserWhereUniqueInput.schema';
import { CompetitionToUserCreateWithoutCompetitionInputSchemaObject } from './CompetitionToUserCreateWithoutCompetitionInput.schema';
import { CompetitionToUserUncheckedCreateWithoutCompetitionInputSchemaObject } from './CompetitionToUserUncheckedCreateWithoutCompetitionInput.schema'

export const CompetitionToUserCreateOrConnectWithoutCompetitionInputSchemaObject = {
    where: Joi.object().keys(CompetitionToUserWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(CompetitionToUserCreateWithoutCompetitionInputSchemaObject),
Joi.object().keys(CompetitionToUserUncheckedCreateWithoutCompetitionInputSchemaObject))
}