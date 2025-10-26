import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import SectionAboutMe from "../components/SectionAboutMe";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className='bg-slate-900 min-h-[100dvh] w-100% overflow-hidden'>
      <div className='p-2 md:p-4 lg:p-0'>
        <NavBar />
        <Hero />
        <SectionAboutMe />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
