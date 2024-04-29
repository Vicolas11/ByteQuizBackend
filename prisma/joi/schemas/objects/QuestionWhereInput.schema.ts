// @ts-nocheck
import Joi from 'joi';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { BoolFilterSchemaObject } from './BoolFilter.schema';
import { StringNullableFilterSchemaObject } from './StringNullableFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { OptionListRelationFilterSchemaObject } from './OptionListRelationFilter.schema';
import { CompetitionRelationFilterSchemaObject } from './CompetitionRelationFilter.schema';
import { CompetitionWhereInputSchemaObject } from './CompetitionWhereInput.schema';
import { QuizRelationFilterSchemaObject } from './QuizRelationFilter.schema';
import { QuizWhereInputSchemaObject } from './QuizWhereInput.schema';
import { UserRelationFilterSchemaObject } from './UserRelationFilter.schema';
import { UserWhereInputSchemaObject } from './UserWhereInput.schema'

export const QuestionWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#QuestionWhereInput'),
Joi.array().items(Joi.link('#QuestionWhereInput'))),
  OR: Joi.array().items(Joi.link('#QuestionWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#QuestionWhereInput'),
Joi.array().items(Joi.link('#QuestionWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  question: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  score: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  time: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  point: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  isAnswered: Joi.alternatives().try(Joi.object().keys(BoolFilterSchemaObject),
Joi.boolean()),
  isCompleted: Joi.alternatives().try(Joi.object().keys(BoolFilterSchemaObject),
Joi.boolean()),
  competitionId: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string()),
  quizId: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  userId: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string()),
  options: Joi.object().keys(OptionListRelationFilterSchemaObject),
  Competition: Joi.alternatives().try(Joi.object().keys(CompetitionRelationFilterSchemaObject),
Joi.object().keys(CompetitionWhereInputSchemaObject)),
  Quiz: Joi.alternatives().try(Joi.object().keys(QuizRelationFilterSchemaObject),
Joi.object().keys(QuizWhereInputSchemaObject)),
  user: Joi.alternatives().try(Joi.object().keys(UserRelationFilterSchemaObject),
Joi.object().keys(UserWhereInputSchemaObject))
}