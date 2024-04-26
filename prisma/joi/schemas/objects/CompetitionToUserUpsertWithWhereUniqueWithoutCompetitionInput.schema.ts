// @ts-nocheck
import Joi from 'joi';
import { CompetitionToUserWhereUniqueInputSchemaObject } from './CompetitionToUserWhereUniqueInput.schema';
import { CompetitionToUserUpdateWithoutCompetitionInputSchemaObject } from './CompetitionToUserUpdateWithoutCompetitionInput.schema';
import { CompetitionToUserUncheckedUpdateWithoutCompetitionInputSchemaObject } from './CompetitionToUserUncheckedUpdateWithoutCompetitionInput.schema';
import { CompetitionToUserCreateWithoutCompetitionInputSchemaObject } from './CompetitionToUserCreateWithoutCompetitionInput.schema';
import { CompetitionToUserUncheckedCreateWithoutCompetitionInputSchemaObject } from './CompetitionToUserUncheckedCreateWithoutCompetitionInput.schema'

export const CompetitionToUserUpsertWithWhereUniqueWithoutCompetitionInputSchemaObject = {
    where: Joi.object().keys(CompetitionToUserWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(CompetitionToUserUpdateWithoutCompetitionInputSchemaObject),
Joi.object().keys(CompetitionToUserUncheckedUpdateWithoutCompetitionInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(CompetitionToUserCreateWithoutCompetitionInputSchemaObject),
Joi.object().keys(CompetitionToUserUncheckedCreateWithoutCompetitionInputSchemaObject))
}