export interface HeroSection {
  name: string;
  currentStatus: string;
  tagline: string;
  headshotUrl: string;
}

export interface AboutSection {
  passions: string[];
}

export interface Skill {
  name: string;
  badgeUrl: string;
  githubRepoUrl: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  demoUrl: string;
  repoUrl: string;
  screenshotUrl: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  startDate: string;   // ISO date
  endDate: string | null;
  contributions: string[];
}

export interface Certification {
  name: string;
  provider: string;
  date: string;        // ISO date
  url: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  gpa?: string;
  graduationDate: string;  // ISO date
  certifications: Certification[];
}

export interface Achievement {
  title: string;
  description: string;
  date: string;        // ISO date
  url?: string;
}

export interface SocialLinks {
  linkedIn: string;
  github: string;
  twitter?: string;
  devTo?: string;
}

export interface ContactSection {
  email: string;
  socialLinks: SocialLinks;
}

export interface Portfolio {
  hero: HeroSection;
  about: AboutSection;
  skills: Skill[];
  projects: Project[];
  experience: ExperienceEntry[];
  education: EducationEntry[];
  achievements: Achievement[];
  contact: ContactSection;
}
