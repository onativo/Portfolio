import About from "@/components/about";
import Experiences from "@/components/experiences";
import Intro from "@/components/intro";
import Projects from "@/components/projetcs";
import SectionDivider from "@/components/section_divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experiences />
    </main>
  );
}
