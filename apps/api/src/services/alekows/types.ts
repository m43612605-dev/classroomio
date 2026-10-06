export interface AlekowsQuizOption {
  label: string;
  isCorrect: boolean;
}

export interface AlekowsQuizQuestion {
  question: string;
  options: AlekowsQuizOption[];
}

export interface AlekowsLesson {
  title: string;
  content: string;
}

export interface AlekowsCourseSeed {
  key: string;
  displayOrder: number;
  title: string;
  description: string;
  sectionTitle: string;
  lessons: AlekowsLesson[];
  quizTitle: string;
  quizDescription: string;
  questions: AlekowsQuizQuestion[];
}
