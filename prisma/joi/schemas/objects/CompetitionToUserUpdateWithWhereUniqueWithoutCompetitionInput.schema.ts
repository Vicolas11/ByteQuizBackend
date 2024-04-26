// @ts-nocheck
import Joi from 'joi';
import { CompetitionToUserWhereUniqueInputSchemaObject } from './CompetitionToUserWhereUniqueInput.schema';
import { CompetitionToUserUpdateWithoutCompetitionInputSchemaObject } from './CompetitionToUserUpdateWithoutCompetitionInput.schema';
import { CompetitionToUserUncheckedUpdateWithoutCompetitionInputSchemaObject } from './CompetitionToUserUncheckedUpdateWithoutCompetitionInput.schema'

export const CompetitionToUserUpdateWithWhereUniqueWithoutCompetitionInputSchemaObject = {
    where: Joi.object().keys(CompetitionToUserWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(CompetitionToUserUpdateWithoutCompetitionInputSchemaObject),
Joi.object().keys(CompetitionToUserUncheckedUpdateWithoutCompetitionInputSchemaObject))
}