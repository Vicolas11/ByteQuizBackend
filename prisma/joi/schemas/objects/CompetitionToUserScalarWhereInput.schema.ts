// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { BoolFilterSchemaObject } from './BoolFilter.schema'

export const CompetitionToUserScalarWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#CompetitionToUserScalarWhereInput'),
Joi.array().items(Joi.link('#CompetitionToUserScalarWhereInput'))),
  OR: Joi.array().items(Joi.link('#CompetitionToUserScalarWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#CompetitionToUserScalarWhereInput'),
Joi.array().items(Joi.link('#CompetitionToUserScalarWhereInput'))),
  userId: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  competitionId: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  joinedDate: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  hasJoined: Joi.alternatives().try(Joi.object().keys(BoolFilterSchemaObject),
Joi.boolean())
}