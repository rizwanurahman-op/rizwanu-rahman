import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ClientMatrixBackground from "@/components/ClientMatrixBackground";

export default function Home() {
  return (
    <div className="relative w-full max-w-full overflow-x-hidden">
      <ClientMatrixBackground />
      <Navbar />
      <main className="relative z-10 overflow-x-hidden w-full max-w-full">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
