import Joi from 'joi';

export const AchievementScalarFieldEnumSchema = Joi.string().valid(...["id","title","medalImg","userId"])