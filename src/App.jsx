import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Intro from "./components/Intro.jsx";
import Services from "./components/Services.jsx";
import Schedules from "./components/Schedules.jsx";
import RestaurantMenu from "./components/Menu.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import SEO from "./components/SEO.jsx";
import StructuredData from "./components/StructuredData.jsx";
import WelcomePopup from "./components/WelcomePopup.jsx";

function App() {
  return (
    <div>
      <SEO />
      <StructuredData />
      <WelcomePopup />
      <Header />
      <Hero />
      <Intro />
      <Services />
      <Schedules />
      <RestaurantMenu />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
