import Intro from "@/components/intro";
import SectionDivider from "@/components/section_divider";
import About from "@/components/about";
import Projects from "@/components/projetcs";
import Skills from "@/components/skills";
import Experiences from "@/components/experiences";
import Contact from "@/components/contact";
import Badges from "@/components/badges";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Badges />
      <Experiences />
      <Contact />
    </main>
  );
}
