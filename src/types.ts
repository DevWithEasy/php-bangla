export type TopicCategory = 
  | 'basic'
  | 'forms'
  | 'advanced'
  | 'oop'
  | 'mysql'
  | 'ajax'
  | 'architect';

export interface CategoryMeta {
  id: TopicCategory;
  nameBn: string;
  nameEn: string;
  badge: string;
  description: string;
}

export interface JuniorVsSeniorComparison {
  juniorCode: string;
  juniorProblems: string[];
  seniorCode: string;
  seniorBenefits: string[];
  architectAdvice: string;
}

export interface ZendInternalsInfo {
  opcodesSummary?: string[];
  cStructOrMemory?: string;
  explanationBn: string;
}

export interface SecurityInfo {
  vulnerabilityType: string;
  attackVectorBn: string;
  preventionRuleBn: string;
  safeCodeSnippet?: string;
}

export interface BeginnerStep {
  step: number;
  title: string;
  explanationBn: string;
  codePiece?: string;
}

export interface InterviewQnA {
  questionBn: string;
  answerBn: string;
  seniorTipBn: string;
}

export interface StudentChallenge {
  title: string;
  taskBn: string;
  hintBn: string;
  starterCode: string;
  solutionCode: string;
}

export interface PresentationSlide {
  slideNumber: number;
  title: string;
  subtitle: string;
  bulletPoints: string[];
  explanationBn?: string;
  codeSnippet?: string;
  codeLanguage?: string;
  outputPreview?: string;
  noteBn?: string;
  trainerSpeechNotes: string;
  analogyOrHighlight?: string;
}

export interface PedagogicalDetails {
  trainerMetaphorBn: string;
  beginnerSteps: BeginnerStep[];
  trainerSecretsBn: string[];
  commonGotchasBn: string[];
  interviewQuestions: InterviewQnA[];
  studentChallenge: StudentChallenge;
  slides: PresentationSlide[];
}

export interface LessonSection {
  title?: string;
  explanationBn: string;
  code?: string;
  codeLanguage?: string;
  outputPreview?: string;
  noteBn?: string;
}

export interface PracticeExample {
  title: string;
  descriptionBn: string;
  code: string;
}

export interface DeepDiveTabs {
  conceptBn: string;
  lessonSections?: LessonSection[];
  keyPointsBn: string[];
  practiceExamples?: PracticeExample[];
  comparison?: JuniorVsSeniorComparison;
  zendInternals?: ZendInternalsInfo;
  security?: SecurityInfo;
}

export interface TopicItem {
  id: string;
  title: string;
  category: TopicCategory;
  tag: string;
  phpVersion: string;
  subtitleBn: string;
  sampleCode: string;
  deepDive: DeepDiveTabs;
  pedagogy?: PedagogicalDetails;
}

export interface CodeExecutionResult {
  stdout: string;
  stderr: string;
  exitCode: number;
  durationMs: number;
  renderedHtml: string;
  isError: boolean;
}

export type ActiveTab = 
  | 'concept' 
  | 'compare' 
  | 'secrets' 
  | 'interview' 
  | 'challenge' 
  | 'internals';

export type ViewMode = 'all' | 'doc' | 'editor';

