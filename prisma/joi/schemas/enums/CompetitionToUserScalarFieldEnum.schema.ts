import Joi from 'joi';

export const CompetitionToUserScalarFieldEnumSchema = Joi.string().valid(...["userId","competitionId","joinedDate","hasJoined","hasSubmitted","totalPoint"])