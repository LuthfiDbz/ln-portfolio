import AboutMe from "../components/Pages/Home/AboutMe"
import Experience from "../components/Pages/Home/Experience"
import Hero from "../components/Pages/Home/Hero"
import Projects from "../components/Pages/Home/Projects"

const Home = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Experience />
      {/* <AboutMe /> */}
    </div>
  )
}

export default Home