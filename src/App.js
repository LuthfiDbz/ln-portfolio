import {AnimatePresence} from 'framer-motion'
import Header from "./components/Header/Header";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import { Routers } from "./routes/Routers";


function App() {
  return (
    <AnimatePresence mode='wait'>
      <Header />
      <SocialMedia />
      <div className="h-screen w-screen bg-hero-image bg-cover bg-center overflow-y-scroll bg-scroll">
        <div className='h-screen w-screen bg-secondary bg-opacity-95'>
          <Routers />
        </div>
      </div>
    </AnimatePresence>
  );
}

export default App;