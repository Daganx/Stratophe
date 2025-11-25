import "./App.css";
import AccompagnementSection from "./components/Accompagnement/Accompagnement";
import Approche from "./components/Approche/Approche";
import Banner from "./components/Banner/Banner";
import Intro from "./components/Intro/Intro";

function App() {
  return (
    <>
      <Banner />
      <Intro />
      <Approche />
      <AccompagnementSection />
    </>
  );
}

export default App;
