import Joi from 'joi';

export const CompetitionToUserScalarFieldEnumSchema = Joi.string().valid(...["id","userId","competitionId","joinedDate","hasJoined","hasSubmitted","totalPoint"])