// @ts-nocheck
import Joi from 'joi';
import { LogoutTokenCreateManyUserInputSchemaObject } from './LogoutTokenCreateManyUserInput.schema'

export const LogoutTokenCreateManyUserInputEnvelopeSchemaObject = {
    data: Joi.alternatives().try(Joi.object().keys(LogoutTokenCreateManyUserInputSchemaObject),
Joi.array().items(Joi.object().keys(LogoutTokenCreateManyUserInputSchemaObject)))
}