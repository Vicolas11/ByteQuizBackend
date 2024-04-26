// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const QuestionMaxOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  question: SortOrderSchema,
  score: SortOrderSchema,
  time: SortOrderSchema,
  point: SortOrderSchema,
  isAnswered: SortOrderSchema,
  isCompleted: SortOrderSchema,
  competitionId: SortOrderSchema,
  quizId: SortOrderSchema
}