import Joi from 'joi';

export const LeaderboardScalarFieldEnumSchema = Joi.string().valid(...["id","point","position","performance","createdAt","userId","competitionId"])