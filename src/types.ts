export interface StatObj
  extends Record<string, string | number | undefined | null> {
  project: string;
  course: string;
  person: string;
  email: string;
  department: string;
  location: string;
  courseStartedDate: string;
  openedLessonsCount: string;
  completedDate: string;
  completedLessonsCount: number;
  totalLessonsCount: number;
  haveNotStarted: string;
  notOnSchedule: string;
  haveStarted: string;
  quizScore: number;
  quizScoreTotal: number;
  certificateTitle: string | null;
}

export type StatsArr = StatObj[];

interface Error {
  message: string;
}

export type FetchError = Error | null;
