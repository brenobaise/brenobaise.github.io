import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import SectionAboutMe from "../components/SectionAboutMe";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className='bg-slate-900 min-h-screen w-100% overflow-hidden'>
      <div className=' mx-auto px-4 pb-20'>
        <NavBar />
        <Hero />
        <SectionAboutMe />
        <Projects />
      </div>
    </div>
  );
}
