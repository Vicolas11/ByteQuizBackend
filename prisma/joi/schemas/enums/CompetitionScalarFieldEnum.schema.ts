import Joi from 'joi';

export const CompetitionScalarFieldEnumSchema = Joi.string().valid(...["id","title","subtitle","imgCover","price","point","totalPoint","overallPoint","createdAt","createdUserId"])