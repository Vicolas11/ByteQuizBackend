import Joi from 'joi';

export const QuizScalarFieldEnumSchema = Joi.string().valid(...["id","totalPoint","overallPoint","createdAt","userId"])