// @ts-nocheck
import Joi from 'joi';
import { LogoutTokenCreateWithoutUserInputSchemaObject } from './LogoutTokenCreateWithoutUserInput.schema';
import { LogoutTokenUncheckedCreateWithoutUserInputSchemaObject } from './LogoutTokenUncheckedCreateWithoutUserInput.schema';
import { LogoutTokenCreateOrConnectWithoutUserInputSchemaObject } from './LogoutTokenCreateOrConnectWithoutUserInput.schema';
import { LogoutTokenCreateManyUserInputEnvelopeSchemaObject } from './LogoutTokenCreateManyUserInputEnvelope.schema';
import { LogoutTokenWhereUniqueInputSchemaObject } from './LogoutTokenWhereUniqueInput.schema'

export const LogoutTokenUncheckedCreateNestedManyWithoutUserInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(LogoutTokenCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(LogoutTokenCreateWithoutUserInputSchemaObject)),
Joi.object().keys(LogoutTokenUncheckedCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(LogoutTokenUncheckedCreateWithoutUserInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(LogoutTokenCreateOrConnectWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(LogoutTokenCreateOrConnectWithoutUserInputSchemaObject))),
  createMany: Joi.object().keys(LogoutTokenCreateManyUserInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(LogoutTokenWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(LogoutTokenWhereUniqueInputSchemaObject)))
}