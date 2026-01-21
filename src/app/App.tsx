import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Experience } from "@/app/components/Experience";
import { Education } from "@/app/components/Education";
import { Qualifications } from "@/app/components/Qualifications";
import { Projects } from "@/app/components/Projects";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Qualifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}