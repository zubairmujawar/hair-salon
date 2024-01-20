import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import "./Components/Navbar/navbar.css";
import HeroSection from "./Components/HeroSection/HeroSection";
import "./Components/HeroSection/HeroSection.css";
import Services from "./Components/Services/Services";
import "./Components/Services/services.css"
import Story from "./Components/Story/Story";
import "./Components/Story/story.css"

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <HeroSection />
      <Services/>
      <Story/>
    </div>
  );
}

export default App;
