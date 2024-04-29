import Joi from 'joi';

export const CompetitionScalarFieldEnumSchema = Joi.string().valid(...["id","title","subtitle","imgCover","price","overallPoint","createdAt","hasStarted","createdUserId"])