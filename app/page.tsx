import About from "@/components/About";
import SelectedWork from "@/components/SelectedWork";
import SectionDivider from "@/components/SectionDivider";
import SkillsMatrix from "@/components/SkillsMatrix";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Contact from "@/components/Contact";
import FunEasterEgg from "@/components/FunEasterEgg";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 max-w-[75rem] mx-auto w-full">
      <Hero />
      <ProofBar />
      <SectionDivider />
      <SelectedWork />
      <SectionDivider />
      <SkillsMatrix />
      <SectionDivider />
      <ExperienceTimeline />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Contact />
      <FunEasterEgg />
    </main>
  )
}
