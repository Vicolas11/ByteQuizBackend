// @ts-nocheck
import Joi from 'joi';
import { QuestionCreateWithoutCompetitionInputSchemaObject } from './QuestionCreateWithoutCompetitionInput.schema';
import { QuestionUncheckedCreateWithoutCompetitionInputSchemaObject } from './QuestionUncheckedCreateWithoutCompetitionInput.schema';
import { QuestionCreateOrConnectWithoutCompetitionInputSchemaObject } from './QuestionCreateOrConnectWithoutCompetitionInput.schema';
import { QuestionUpsertWithWhereUniqueWithoutCompetitionInputSchemaObject } from './QuestionUpsertWithWhereUniqueWithoutCompetitionInput.schema';
import { QuestionCreateManyCompetitionInputEnvelopeSchemaObject } from './QuestionCreateManyCompetitionInputEnvelope.schema';
import { QuestionWhereUniqueInputSchemaObject } from './QuestionWhereUniqueInput.schema';
import { QuestionUpdateWithWhereUniqueWithoutCompetitionInputSchemaObject } from './QuestionUpdateWithWhereUniqueWithoutCompetitionInput.schema';
import { QuestionUpdateManyWithWhereWithoutCompetitionInputSchemaObject } from './QuestionUpdateManyWithWhereWithoutCompetitionInput.schema';
import { QuestionScalarWhereInputSchemaObject } from './QuestionScalarWhereInput.schema'

export const QuestionUncheckedUpdateManyWithoutCompetitionNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(QuestionCreateWithoutCompetitionInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionCreateWithoutCompetitionInputSchemaObject)),
Joi.object().keys(QuestionUncheckedCreateWithoutCompetitionInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionUncheckedCreateWithoutCompetitionInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(QuestionCreateOrConnectWithoutCompetitionInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionCreateOrConnectWithoutCompetitionInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(QuestionUpsertWithWhereUniqueWithoutCompetitionInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionUpsertWithWhereUniqueWithoutCompetitionInputSchemaObject))),
  createMany: Joi.object().keys(QuestionCreateManyCompetitionInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(QuestionWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(QuestionWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(QuestionWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(QuestionWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(QuestionUpdateWithWhereUniqueWithoutCompetitionInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionUpdateWithWhereUniqueWithoutCompetitionInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(QuestionUpdateManyWithWhereWithoutCompetitionInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionUpdateManyWithWhereWithoutCompetitionInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(QuestionScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(QuestionScalarWhereInputSchemaObject)))
}