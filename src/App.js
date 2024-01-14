import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import "./Components/Navbar/navbar.css";
import HeroSection from "./Components/HeroSection/HeroSection";
import "./Components/HeroSection/HeroSection.css";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
