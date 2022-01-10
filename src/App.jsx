import { useContext } from "react";
import "./App.css";
import MyContext from "./context/MyContext";

import CityWeather from "./components/CityWeather";
import CitySearch from "./components/CitySearch";
const App = () => {
  const context = useContext(MyContext);
  const { data, dataCity } = context;
  return (
    <main>
      <CitySearch />

      {!dataCity.loading && <CityWeather />}
    </main>
  );
};

export default App;
