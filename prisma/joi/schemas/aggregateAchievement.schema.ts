import Joi from 'joi';
import { AchievementWhereInputSchemaObject, AchievementOrderByWithRelationInputSchemaObject, AchievementWhereUniqueInputSchemaObject } from './objects'

export const AchievementAggregateSchema = Joi.object().keys({ where: Joi.object().keys(AchievementWhereInputSchemaObject), orderBy: Joi.object().keys(AchievementOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(AchievementWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number()  }).required()