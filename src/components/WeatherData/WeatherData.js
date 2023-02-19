import "./WeatherData.css";
import { useState, useEffect } from "react";
import cloudy from "../../assets/cloudy.png";
import drizzle from "../../assets/drizzle.png";
import haze from "../../assets/haze.png";
import rain from "../../assets/rain.png";
import snow from "../../assets/snow.png";
import sun from "../../assets/sun.png";
import thunderstorm from "../../assets/thunderstorm.png";

function WeatherData() {
  let imgObj = {
    img1: cloudy,
    img2: drizzle,
    img3: haze,
    img4: rain,
    img5: snow,
    img6: sun,
    img7: thunderstorm,
  };

  const [search, setSearch] = useState("");
  const [resultName, setResultName] = useState("");
  const [resultText, setResultText] = useState("");
  const [resultTemp, setResultTemp] = useState("");
  const [resultImg, setResultImg] = useState("");

  function handleChange(event) {
    setSearch(event.target.value);
  }

  useEffect(() => {
    imgSearch();
  });

//Search appropriate image based on result
  function imgSearch() {
    switch (resultText) {
      case "Clear":
        setResultImg(imgObj.img6);
        break;
      case "Clouds":
        setResultImg(imgObj.img1);
        break;
      case "Rain":
        setResultImg(imgObj.img4);
        break;
      case "Mist":
        setResultImg(imgObj.img3);
        break;
      case "Snow":
        setResultImg(imgObj.img5);
        break;
      case "Thunderstorm":
        setResultImg(imgObj.img7);
        break;
      case "Drizzle":
        setResultImg(imgObj.img2);
        break;
      default:
        break;
    }
  }

  function btnClicked() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=`)
      .then((response) => response.json())
      .then((data) => {
        data.name
          ? setResultName(data.name)
          : setResultName((prevState) => prevState);
        setResultTemp(Math.round(data.main.temp - 273.15));
        setResultText(data.weather[0].main);
        imgSearch();
      })
      .catch((error) => alert(error.message));
  }

  return (
    <div className="weather-main">
      <div className="weather-container">
        <div className="weather-title">
          <h1 id="Weather">Weather data finder</h1>
        </div>
        <div className="weather-descr">
          <span>Please enter the name of the city:</span>
        </div>
        <div className="weather-input">
          <input type="text" onChange={handleChange}></input>
        </div>
        <div className="weather-button">
          <button onClick={btnClicked} className="weather-btn">
            Search
          </button>
        </div>

        <div className="result-container">
          <div className="result-cityname">
            <h3>{resultName}</h3>
          </div>
          <div className="result-temp">
            {resultTemp || 0 ? <h3>{resultTemp} °C</h3> : ""}
          </div>
          <div className="result-wtext">{resultText}</div>
          <div className="result-wimg">
            <img className="wimg" src={resultImg} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherData;
