import About from "@/components/About";
import Projects from "@/components/Projects";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  )
}
