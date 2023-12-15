import Header from "./components/Header/Header";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import { Routers } from "./routes/Routers";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";


function App() {
  return (
    <div>
      <Header />
      <SocialMedia />
      <div className="h-screen w-screen bg-hero-image bg-cover bg-center">
        <div className='h-screen w-screen bg-secondary bg-opacity-95 overflow-y-scroll bg-scroll  ' >
          {/* <Routers /> */}
          <Hero />
          <Projects />
          <AboutMe />
        </div>
      </div>
    </div>
  );
}

export default App;