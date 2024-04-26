// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema'

export const LogoutTokenScalarWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#LogoutTokenScalarWhereInput'),
Joi.array().items(Joi.link('#LogoutTokenScalarWhereInput'))),
  OR: Joi.array().items(Joi.link('#LogoutTokenScalarWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#LogoutTokenScalarWhereInput'),
Joi.array().items(Joi.link('#LogoutTokenScalarWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  userId: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  token: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string())
}