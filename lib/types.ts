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