import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import Weather from "./Weather";

const Content = () => {
  const { loading, error, isDark } = useContext(WeatherContext);

  return (
    <>
      {error && (
        <h2
          style={{
            color: isDark ? "white" : "black",
          }}
          className="normal"
        >
          Error. Wrong city
        </h2>
      )}
      {loading ? (
        <h2
          style={{
            color: isDark ? "white" : "black",
            marginTop: 20,
          }}
          className="normal"
        >
          Loading...
        </h2>
      ) : (
        <Weather
          style={{
            color: isDark ? "white" : "black",
          }}
        />
      )}
    </>
  );
};

export default Content;
