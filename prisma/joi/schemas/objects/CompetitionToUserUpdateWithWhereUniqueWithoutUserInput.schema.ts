// @ts-nocheck
import Joi from 'joi';
import { CompetitionToUserWhereUniqueInputSchemaObject } from './CompetitionToUserWhereUniqueInput.schema';
import { CompetitionToUserUpdateWithoutUserInputSchemaObject } from './CompetitionToUserUpdateWithoutUserInput.schema';
import { CompetitionToUserUncheckedUpdateWithoutUserInputSchemaObject } from './CompetitionToUserUncheckedUpdateWithoutUserInput.schema'

export const CompetitionToUserUpdateWithWhereUniqueWithoutUserInputSchemaObject = {
    where: Joi.object().keys(CompetitionToUserWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(CompetitionToUserUpdateWithoutUserInputSchemaObject),
Joi.object().keys(CompetitionToUserUncheckedUpdateWithoutUserInputSchemaObject))
}