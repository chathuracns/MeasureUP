// import logo from "./logo.svg";
import "./App.css";
import AboutUnique from "./Components/AboutUnique";
import Appbar from "./Components/Appbar";
import CarouselSection from "./Components/Carousel";
import CarouselItem from "./Components/CarouselItem";
import Footer from "./Components/Footer";
import HowItWorks from "./Components/HowItWorks";
import IntroSection from "./Components/IntroSection";
import MadeInSriLanka from "./Components/MadeInSriLanka";
import SupportSection from "./Components/SupportSection";
import TeamSection from "./Components/TeamSection";

function App() {
  // const scrollToSection = (sectionId) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <>
      <Appbar />
      <CarouselSection/>
      {/* <IntroSection /> */}

      {/* <TeamSection /> */}

      <HowItWorks />
      <AboutUnique />

      <SupportSection />

      <MadeInSriLanka />

      <Footer />
      {/* <h1>Hi this is measure up</h1> */}
    </>
  );
}

export default App;
