import { useContext, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";

const EnterCity = () => {
  const { setQuery } = useContext(WeatherContext);
  const [term, setTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(term.toLowerCase());
    setTerm("");
  };
  return (
    <div className="enter-city">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter City name..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          required
        />
        <button type="submit">Find!</button>
      </form>
    </div>
  );
};

export default EnterCity;
