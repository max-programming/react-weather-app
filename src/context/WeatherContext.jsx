import { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [query, setQuery] = useState("london");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState({});
  const [isDark, setIsDark] = useState(document.body.className === "dark");
  const hours = new Date().getHours();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        );
        const data = await res.json();
        setWeather(data);
        if (weather === {}) setError(true);
        else setLoading(false);
      } catch (err) {
        setError(true);
      }
    };
    const changeBGImage = () => {
      if (hours >= 19) {
        document.body.className = "dark";
        setIsDark(true);
      } else if (hours >= 6) {
        document.body.className = "light";
        setIsDark(false);
      }
    };
    changeBGImage();
    fetchWeather();
  }, [query, hours, weather]);

  return (
    <WeatherContext.Provider
      value={{ query, loading, weather, error, isDark, setQuery }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
