// import { Button } from "./components/ui/button";
import Home from "./pages/Home";
import Swiper from "./components/ui/Swiper";
import About from "./pages/About";
import Perks from "./components/Perks";
import Blog from "./components/Blog";
import Booking from "./components/Booking";
import Footer from "./components/ui/Footer";

const App = () => {
  return (
    <>
      <Home />
      <Swiper />
      <About />
      <Perks />
      <Blog />
      <Booking />
      <Footer />
    </>
  );
};

export default App;
