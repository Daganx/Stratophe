import "./App.css";
import About from "./components/About/About";
import AccompagnementSection from "./components/Accompagnement/Accompagnement";
import Approche from "./components/Approche/Approche";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Process from "./components/Process/Process";
import Rating from "./components/Rating/Rating";

function App() {
  return (
    <>
      <Banner />
      <Intro />
      <Approche />
      <About />
      <AccompagnementSection />
      <Process />
      <Rating />
      <Footer />
    </>
  );
}

export default App;
