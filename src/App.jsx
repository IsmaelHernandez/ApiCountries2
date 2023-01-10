import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import CardCountries from "./Components/CardCountries";

function App() {
  const [countries, setCountries] = useState();

  useEffect(() => {
    const URL = "https://restcountries.com/v3.1/all";
    axios
      .get(URL)
      .then((res) => setCountries(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(countries);

  return (
    <div className="App">
      <div className="divContainer">
        {countries?.map((country) => (
          <CardCountries
            country={country}
            key={`${country.area}-${country.population}-${country.name.official}`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
