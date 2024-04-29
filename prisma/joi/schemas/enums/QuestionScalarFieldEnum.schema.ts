import Joi from 'joi';

export const QuestionScalarFieldEnumSchema = Joi.string().valid(...["id","question","score","time","point","isAnswered","isCompleted","competitionId","quizId","createdAt","userId"])