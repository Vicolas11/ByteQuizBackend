// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { UserRelationFilterSchemaObject } from './UserRelationFilter.schema';
import { UserWhereInputSchemaObject } from './UserWhereInput.schema'

export const LogoutTokenWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#LogoutTokenWhereInput'),
Joi.array().items(Joi.link('#LogoutTokenWhereInput'))),
  OR: Joi.array().items(Joi.link('#LogoutTokenWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#LogoutTokenWhereInput'),
Joi.array().items(Joi.link('#LogoutTokenWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  userId: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  token: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  user: Joi.alternatives().try(Joi.object().keys(UserRelationFilterSchemaObject),
Joi.object().keys(UserWhereInputSchemaObject))
}