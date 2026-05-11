// App.jsx — wrap everything in Layout
import Layout from "./pages/Layout";
import Hero from "./pages/Hero";
import Education from "./pages/Education";
import Skill from "./pages/Skill";
import TechnicalSkills from "./pages/TechnicalSkills";
import Project from "./pages/Project";

export default function App() {
  return (
    <Layout>
      <Hero />
      <Education />
      <TechnicalSkills />
      <Skill />
      <Project />
    </Layout>
  );
}
