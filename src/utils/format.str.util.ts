import { QuestionType } from "../interfaces/question.interface";

export const formatErrMsg = (inputString: string) => {
  const substrings = inputString.split("\n");
  const lastSubstring = substrings[substrings.length - 1];
  return substrings.length === 0 ? undefined : lastSubstring;
};

export const formatQuestions = (arr: QuestionType[]) =>
  arr.map((question) => ({
    question: question.question,
    options: {
      create: question.options.map((option) => ({
        label: option.label,
        value: option.value,
        isCorrect: option.isCorrect,
        isSelected: option.isSelected,
      })),
    },
    score: question.score,
    time: question.time,
    point: question.point,
    isAnswered: question.isAnswered,
    isCompleted: question.isCompleted,
  }));
