export interface ISurvey {
  cod?: string;
  name: string;
  description: string;
  questions: ISurveyQuestion[];
}

export interface ISurveyResponse {
  data: ISurvey[];
  count: number;
  currentPage: number;
  nextPage: number;
  prevPage: number;
  lastPage: number;
}

export interface ISurveyQuestion {
  description: string;
}
