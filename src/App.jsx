import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Schedules from "./components/Schedules";
import RestaurantMenu from "./components/Menu";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Intro />
      <Services />
      <Schedules />
      <RestaurantMenu />
      <Footer />
    </div>
  );
}

export default App;
