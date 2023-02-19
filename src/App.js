import "./App.css";
import Header from "../src/components/Header/Header";
import UpperContainer from "./components/UpperContainer/UpperContainer";
import Main from "./components/Main/Main";
import WeatherData from "./components/WeatherData/WeatherData";
import MemoryGame from "./components/MemoryGame/MemoryGame";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <UpperContainer>
        <Header />
        <Main />
      </UpperContainer>
      <WeatherData />
      <MemoryGame />
      <Footer/>
    </div>
  );
}

export default App;
