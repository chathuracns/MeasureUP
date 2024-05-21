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
      <CarouselSection item={"item1"} data={"data1"} />
      <HowItWorks />
      <AboutUnique />
      <CarouselSection item={"item2"} data={"data2"} />
      <SupportSection />

      <MadeInSriLanka />
      <TeamSection />

      <Footer />
    </>
  );
}

export default App;
