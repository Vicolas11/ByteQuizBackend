// @ts-nocheck
import Joi from 'joi';
import { CompetitionToUserWhereUniqueInputSchemaObject } from './CompetitionToUserWhereUniqueInput.schema';
import { CompetitionToUserCreateWithoutUserInputSchemaObject } from './CompetitionToUserCreateWithoutUserInput.schema';
import { CompetitionToUserUncheckedCreateWithoutUserInputSchemaObject } from './CompetitionToUserUncheckedCreateWithoutUserInput.schema'

export const CompetitionToUserCreateOrConnectWithoutUserInputSchemaObject = {
    where: Joi.object().keys(CompetitionToUserWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(CompetitionToUserCreateWithoutUserInputSchemaObject),
Joi.object().keys(CompetitionToUserUncheckedCreateWithoutUserInputSchemaObject))
}