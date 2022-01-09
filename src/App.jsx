import { useContext } from "react";
import "./App.css";
import MyContext from "./context/MyContext";
import CityData from "./components/CityData";
import CityWeather from "./components/CityWeather";
import CitySearch from "./components/CitySearch";
const App = () => {
  const context = useContext(MyContext);
  const { loading, data, dataCity } = context;
  return (
    <main>
      {<CityData />}
      <CitySearch />

      {<CityWeather />}
      {/* {!loading && data && data.length > 0 && <CityData />}
      <CitySearch />

      {dataCity && dataCity.length > 0 && data.length > 0 && <CityWeather />} */}
    </main>
  );
};

export default App;
