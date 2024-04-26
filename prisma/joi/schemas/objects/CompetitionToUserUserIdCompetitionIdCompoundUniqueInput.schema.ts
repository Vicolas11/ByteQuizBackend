// @ts-nocheck
import Joi from 'joi';


export const CompetitionToUserUserIdCompetitionIdCompoundUniqueInputSchemaObject = {
    userId: Joi.string().required(),
  competitionId: Joi.string().required()
}