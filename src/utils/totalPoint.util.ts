export const totalPointVal = (questionList: any): number => {
  let totalScoreAllQuestions = 0;

  questionList.forEach((question: any) => {
    const totalScore = question.point;
    totalScoreAllQuestions += totalScore;
  });

  return totalScoreAllQuestions;
};
