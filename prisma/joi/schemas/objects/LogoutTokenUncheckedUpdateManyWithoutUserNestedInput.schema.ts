// @ts-nocheck
import Joi from 'joi';
import { LogoutTokenCreateWithoutUserInputSchemaObject } from './LogoutTokenCreateWithoutUserInput.schema';
import { LogoutTokenUncheckedCreateWithoutUserInputSchemaObject } from './LogoutTokenUncheckedCreateWithoutUserInput.schema';
import { LogoutTokenCreateOrConnectWithoutUserInputSchemaObject } from './LogoutTokenCreateOrConnectWithoutUserInput.schema';
import { LogoutTokenUpsertWithWhereUniqueWithoutUserInputSchemaObject } from './LogoutTokenUpsertWithWhereUniqueWithoutUserInput.schema';
import { LogoutTokenCreateManyUserInputEnvelopeSchemaObject } from './LogoutTokenCreateManyUserInputEnvelope.schema';
import { LogoutTokenWhereUniqueInputSchemaObject } from './LogoutTokenWhereUniqueInput.schema';
import { LogoutTokenUpdateWithWhereUniqueWithoutUserInputSchemaObject } from './LogoutTokenUpdateWithWhereUniqueWithoutUserInput.schema';
import { LogoutTokenUpdateManyWithWhereWithoutUserInputSchemaObject } from './LogoutTokenUpdateManyWithWhereWithoutUserInput.schema';
import { LogoutTokenScalarWhereInputSchemaObject } from './LogoutTokenScalarWhereInput.schema'

export const LogoutTokenUncheckedUpdateManyWithoutUserNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(LogoutTokenCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(LogoutTokenCreateWithoutUserInputSchemaObject)),
Joi.object().keys(LogoutTokenUncheckedCreateWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(LogoutTokenUncheckedCreateWithoutUserInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(LogoutTokenCreateOrConnectWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(LogoutTokenCreateOrConnectWithoutUserInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(LogoutTokenUpsertWithWhereUniqueWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(LogoutTokenUpsertWithWhereUniqueWithoutUserInputSchemaObject))),
  createMany: Joi.object().keys(LogoutTokenCreateManyUserInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(LogoutTokenWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(LogoutTokenWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(LogoutTokenWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(LogoutTokenWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(LogoutTokenWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(LogoutTokenWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(LogoutTokenWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(LogoutTokenWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(LogoutTokenUpdateWithWhereUniqueWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(LogoutTokenUpdateWithWhereUniqueWithoutUserInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(LogoutTokenUpdateManyWithWhereWithoutUserInputSchemaObject),
Joi.array().items(Joi.object().keys(LogoutTokenUpdateManyWithWhereWithoutUserInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(LogoutTokenScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(LogoutTokenScalarWhereInputSchemaObject)))
}