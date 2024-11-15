import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from "./components/Header/Header";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import { Routers } from "./routes/Routers";
import ProgresBar from "./components/Loader/ProgresBar";



function App() {
  const [splashScreen, setSplashScreen] = useState(false)

  // setTimeout(() => {
  //   setSplashScreen(false)
  // }, 3000)

  useEffect(() => {
    AOS.init({
      duration: 2000, // Durasi animasi dalam milidetik
    });
  }, []);

  return (
    splashScreen ?
      <div>
        <div className="h-screen w-screen bg-hero-image bg-cover bg-center">
          <div className='h-screen w-screen bg-secondary bg-opacity-95 overflow-y-scroll bg-scroll ' >
            <div className="w-1/4 h-6 mx-auto mt-[40vh]">
              <ProgresBar />  
            </div>
          </div>
        </div>
      </div>
      :
      <div>
        <div className="h-screen w-screen bg-hero-image bg-cover bg-center ">
          <div className="bg-secondary bg-opacity-95">
            <Header />
            <SocialMedia />
            <div  className='h-screen w-screen   overflow-y-scroll bg-scroll  ' >
              <Routers />
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default App;