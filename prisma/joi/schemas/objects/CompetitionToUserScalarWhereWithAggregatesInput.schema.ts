// @ts-nocheck
import Joi from 'joi';
import { StringWithAggregatesFilterSchemaObject } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterSchemaObject } from './DateTimeWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterSchemaObject } from './BoolWithAggregatesFilter.schema';
import { IntWithAggregatesFilterSchemaObject } from './IntWithAggregatesFilter.schema'

export const CompetitionToUserScalarWhereWithAggregatesInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#CompetitionToUserScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#CompetitionToUserScalarWhereWithAggregatesInput'))),
  OR: Joi.array().items(Joi.link('#CompetitionToUserScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(Joi.link('#CompetitionToUserScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#CompetitionToUserScalarWhereWithAggregatesInput'))),
  userId: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  competitionId: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  joinedDate: Joi.alternatives().try(Joi.object().keys(DateTimeWithAggregatesFilterSchemaObject)),
  hasJoined: Joi.alternatives().try(Joi.object().keys(BoolWithAggregatesFilterSchemaObject),
Joi.boolean()),
  hasSubmitted: Joi.alternatives().try(Joi.object().keys(BoolWithAggregatesFilterSchemaObject),
Joi.boolean()),
  totalPoint: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject),
Joi.number())
}