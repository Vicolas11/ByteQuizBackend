import Joi from 'joi';
import { AchievementWhereInputSchemaObject, AchievementOrderByWithAggregationInputSchemaObject, AchievementScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { AchievementScalarFieldEnumSchema } from './enums'

export const AchievementGroupBySchema = Joi.object().keys({ where: Joi.object().keys(AchievementWhereInputSchemaObject), orderBy: Joi.object().keys(AchievementOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(AchievementScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(AchievementScalarFieldEnumSchema).required()  }).required()