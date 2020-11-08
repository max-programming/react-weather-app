import { useContext, useState } from "react";
import { useMediaQuery } from "beautiful-react-hooks";
import { WeatherContext } from "../context/WeatherContext";

const Weather = ({ style }) => {
  const { weather } = useContext(WeatherContext);
  const matches = useMediaQuery("(max-width: 768px)");
  const [selected, setSelected] = useState(false);
  return weather.cod === "404" ? (
    <h1 style={style}>Enter correct city name</h1>
  ) : (
    <div className="weather" style={style}>
      <div className="weather-name">
        {weather.name}, {weather.sys.country}
      </div>
      <div className="weather-info">
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="icon"
        />
        <p>
          {(selected
            ? weather.main.temp * (9 / 5) - 459.67
            : weather.main.temp - 273.15
          ).toFixed(1)}
          &deg;
        </p>
        <div className="temp-changers">
          <p
            onClick={() => setSelected(false)}
            style={{
              fontSize: selected
                ? matches
                  ? "1.5rem"
                  : "2rem"
                : matches
                ? "2.5rem"
                : "3.5rem",
              cursor: "pointer",
            }}
          >
            C
          </p>
          <p
            onClick={() => setSelected(true)}
            style={{
              fontSize: selected
                ? matches
                  ? "2.5rem"
                  : "3.5rem"
                : matches
                ? "1.5rem"
                : "2rem",
              cursor: "pointer",
            }}
          >
            F
          </p>
        </div>
      </div>
      <div className="weather-condition">{weather.weather[0].main}</div>
    </div>
  );
};
export default Weather;
