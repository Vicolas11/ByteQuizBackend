import { GenQuestionsType, QuestionType } from "../interfaces/question.interface";

export const totalPointVal = (questionList: GenQuestionsType[]): number => {
  let totalScoreAllQuestions = 0;

  questionList.forEach((question) => {
    const totalScore = question.point;
    totalScoreAllQuestions += totalScore;
  });

  return totalScoreAllQuestions;
};
