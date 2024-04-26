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
  methods: QuestionType[];
  inheritance: QuestionType[];
  encapsulation: QuestionType[];
  polymorphism: QuestionType[];
  general: QuestionType[];
}

export type ConceptType =
  | "arrays"
  | "loops"
  | "functions"
  | "variables"
  | "classes"
  | "methods"
  | "inheritance"
  | "encapsulation"
  | "polymorphism"
  | "general";
