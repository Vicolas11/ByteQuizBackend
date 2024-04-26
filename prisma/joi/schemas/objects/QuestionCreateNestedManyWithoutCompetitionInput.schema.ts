// @ts-nocheck
import Joi from 'joi';
import { QuestionCreateWithoutCompetitionInputSchemaObject } from './QuestionCreateWithoutCompetitionInput.schema';
import { QuestionUncheckedCreateWithoutCompetitionInputSchemaObject } from './QuestionUncheckedCreateWithoutCompetitionInput.schema';
import { QuestionCreateOrConnectWithoutCompetitionInputSchemaObject } from './QuestionCreateOrConnectWithoutCompetitionInput.schema';
import { QuestionCreateManyCompetitionInputEnvelopeSchemaObject } from './QuestionCreateManyCompetitionInputEnvelope.schema';
import { QuestionWhereUniqueInputSchemaObject } from './QuestionWhereUniqueInput.schema'

export const QuestionCreateNestedManyWithoutCompetitionInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(QuestionCreateWithoutCompetitionInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionCreateWithoutCompetitionInputSchemaObject)),
Joi.object().keys(QuestionUncheckedCreateWithoutCompetitionInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionUncheckedCreateWithoutCompetitionInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(QuestionCreateOrConnectWithoutCompetitionInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionCreateOrConnectWithoutCompetitionInputSchemaObject))),
  createMany: Joi.object().keys(QuestionCreateManyCompetitionInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(QuestionWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionWhereUniqueInputSchemaObject)))
}