import MainProjectCard from "./MainProjectCard";
import ProjectCard from "./ProjectCard";
import SecondProjectCard from "./SecondProjectCard";

export default function Projects() {
  return (
    <>
      <div className='flex flex-col text-white'>
        <MainProjectCard />
        <SecondProjectCard />
        {/* <ProjectCard />
        <ProjectCard />
        <ProjectCard /> */}
      </div>
    </>
  );
}
