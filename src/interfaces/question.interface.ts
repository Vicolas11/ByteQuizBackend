interface OptionType {
  value: string;
  label: string;
  isCorrect: boolean;
  isSelected: boolean;
}

export interface QuestionType {
  question: string;
  options: OptionType[];
  score: number;
  time: number;
  point: number;
  isAnswered: boolean;
  isCompleted: boolean;
}

interface CreateOptionType {
  create: OptionType[];
}

export interface GenQuestionsType {
  question: string;
  options: CreateOptionType;
  score: number;
  time: number;
  point: number;
  isAnswered: boolean;
  isCompleted: boolean;
}

export interface QuizType {
  arrays: QuestionType[];
  loops: QuestionType[];
  functions: QuestionType[];
  variables: QuestionType[];
  classes: QuestionType[];
  general: QuestionType[];
  "data types": QuestionType[];
  "conditional statements": QuestionType[];
}

export type ConceptType =
  | "arrays"
  | "loops"
  | "functions"
  | "variables"
  | "classes"
  | "general"
  | "data types"
  | "conditional statements";
