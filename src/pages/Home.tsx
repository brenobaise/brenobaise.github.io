import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import SectionAboutMe from "../components/SectionAboutMe";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className='bg-slate-900 min-h-screen'>
      <div className='max-w-4xl mx-auto px-4 pb-20'>
        <NavBar />
        <Hero />
        <SectionAboutMe />
        <Projects />
      </div>
    </div>
  );
}
