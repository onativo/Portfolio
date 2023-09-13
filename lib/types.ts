import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type ActiveSectionContextProviderProps = { children: React.ReactNode };

export type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeLastClick: number;
  setTimeLastClick: React.Dispatch<React.SetStateAction<number>>
};

export type useSectionInViewProps = {sectionName: SectionName}

export type ContactFormProps = {
  senderMessage: string
  senderEmail: string
  senderName: string
}

export type Theme = "light" | "dark"

export type ThemeContextProviderProps = {
  children: React.ReactNode
}

export type ThemeContextType = {
  theme: Theme,
  toggleTheme: () => void
}