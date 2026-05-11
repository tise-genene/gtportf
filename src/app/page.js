import ProjectsList from "./components/ProjectsList";
import TechLists from "./components/TechLists";
import About from "./components/About";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import SelectedWork from "./components/SelectedWork";
import SkillCategories from "./components/SkillCategories";
import Education from "./components/Education";
import Volunteering from "./components/Volunteering";
import Links from "./components/Links";


export default function Home() {
  return (
    <>
      <div>
        <main className="mt-5 p-4">
          <Profile />
          <About />
          <TechLists />
          <SkillCategories />
          <SelectedWork />
          <ProjectsList />
          <Experience />
          <Education />
          <Volunteering />
          <Links />
        </main>
      </div>
    </>
  );
}