// import { Button } from "./components/ui/button";
import Home from "./Home";
import About from "./About";
import Booking from "./components/Booking";
import Perks from "./components/Perks";
import Swiper from "./components/ui/Swiper";

const App = () => {
  return (
    <div className=' w-full flex items-center flex-col '>
      <Home />
      <Swiper />
      <About />
      <Perks />
      <Booking />
    </div>
  );
};

export default App;
