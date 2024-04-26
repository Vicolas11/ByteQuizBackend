// @ts-nocheck
import Joi from 'joi';
import { CompetitionToUserWhereUniqueInputSchemaObject } from './CompetitionToUserWhereUniqueInput.schema';
import { CompetitionToUserUpdateWithoutUserInputSchemaObject } from './CompetitionToUserUpdateWithoutUserInput.schema';
import { CompetitionToUserUncheckedUpdateWithoutUserInputSchemaObject } from './CompetitionToUserUncheckedUpdateWithoutUserInput.schema';
import { CompetitionToUserCreateWithoutUserInputSchemaObject } from './CompetitionToUserCreateWithoutUserInput.schema';
import { CompetitionToUserUncheckedCreateWithoutUserInputSchemaObject } from './CompetitionToUserUncheckedCreateWithoutUserInput.schema'

export const CompetitionToUserUpsertWithWhereUniqueWithoutUserInputSchemaObject = {
    where: Joi.object().keys(CompetitionToUserWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(CompetitionToUserUpdateWithoutUserInputSchemaObject),
Joi.object().keys(CompetitionToUserUncheckedUpdateWithoutUserInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(CompetitionToUserCreateWithoutUserInputSchemaObject),
Joi.object().keys(CompetitionToUserUncheckedCreateWithoutUserInputSchemaObject))
}