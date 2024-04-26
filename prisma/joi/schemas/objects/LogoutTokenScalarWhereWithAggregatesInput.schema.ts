// @ts-nocheck
import Joi from 'joi';
import { StringWithAggregatesFilterSchemaObject } from './StringWithAggregatesFilter.schema'

export const LogoutTokenScalarWhereWithAggregatesInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#LogoutTokenScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#LogoutTokenScalarWhereWithAggregatesInput'))),
  OR: Joi.array().items(Joi.link('#LogoutTokenScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(Joi.link('#LogoutTokenScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#LogoutTokenScalarWhereWithAggregatesInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  userId: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string()),
  token: Joi.alternatives().try(Joi.object().keys(StringWithAggregatesFilterSchemaObject),
Joi.string())
}