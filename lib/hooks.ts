import { useActiveSectionContext } from "@/context/active_section_context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { useSectionInViewProps } from "./types";

export function useSectionInView({sectionName}: useSectionInViewProps, threshold = 0.3) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeLastClick, sectionName]);

  return {
    ref,
  };
}
