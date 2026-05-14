// App.jsx — wrap everything in Layout
import Layout from "./pages/Layout";
import Hero from "./pages/Hero";
import Education from "./pages/Education";
import Skill from "./pages/Skill";
import TechnicalSkills from "./pages/TechnicalSkills";
import Project from "./pages/Project";
import Showcase from "./pages/Showcase";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Layout>
      <Hero />
      <Education />
      <TechnicalSkills />
      <Project />
      <Skill />     
       <Showcase />
       <Contact />
    </Layout>
  );
}
