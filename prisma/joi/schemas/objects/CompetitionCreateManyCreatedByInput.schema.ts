// @ts-nocheck
import Joi from 'joi';


export const CompetitionCreateManyCreatedByInputSchemaObject = {
    id: Joi.string(),
  title: Joi.string().required(),
  subtitle: Joi.string().required(),
  imgCover: Joi.string().required(),
  price: Joi.number().required(),
  overallPoint: Joi.number(),
  createdAt: Joi.date(),
  hasStarted: Joi.boolean()
}