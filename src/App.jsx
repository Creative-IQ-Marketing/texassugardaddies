import { lazy, Suspense } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import SEO from "./components/SEO.jsx";
import StructuredData from "./components/StructuredData.jsx";

const Intro = lazy(() => import("./components/Intro.jsx"));
const Services = lazy(() => import("./components/Services.jsx"));
const Schedules = lazy(() => import("./components/Schedules.jsx"));
const RestaurantMenu = lazy(() => import("./components/Menu.jsx"));
const Testimonials = lazy(() => import("./components/Testimonials.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));
const WelcomePopup = lazy(() => import("./components/WelcomePopup.jsx"));

function App() {
  return (
    <div>
      <SEO />
      <StructuredData />
      <Header />
      <Hero />
      <Suspense fallback={null}>
        <WelcomePopup />
        <Intro />
        <Services />
        <Schedules />
        <RestaurantMenu />
        <Testimonials />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
