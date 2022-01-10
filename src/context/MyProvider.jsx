import React from "react";
import { useEffect, useState } from "react";
import MyContext from "./MyContext";

const MyProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [dataCity, setDataCity] = useState({});
  // const [dataWeather, setDataWeather] = useState({});
  const [input, setInput] = useState("");
  const [inputCode, setInputCode] = useState("");
  const [inputState, setInputState] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("Remscheid");
  const [searchCountry, setSearchCountry] = useState("de");
  const [searchState, setSearchState] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const API_KEY = process.env.REACT_APP_API_KEY;

  const URI = `http://api.openweathermap.org/geo/1.0/direct?q=${search},${searchState},${searchCountry}&limit=10&appid=${API_KEY}`;

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleChangeCode = (e) => {
    setInputCode(e.target.value);
  };
  const handleChangeState = (e) => {
    setInputState(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(input);
    setSearchCountry(inputCode);
    setSearchState(inputState);
  };

  useEffect(() => {
    fetch(URI)
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => setLoading(false))
      .catch((err) => setError(err));
  }, [URI]);
  console.log(data);
  useEffect(() => {
    if (data[0]) {
      setLongitude(data[0].lon);
      setLatitude(data[0].lat);
    }
    // setDataWeather(data.list);
  }, [data]);
  console.log(latitude);
  console.log(longitude);
  useEffect(() => {
    // if (latitude.length > 0 && longitude.length > 0)
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setDataCity(data))
      .then(() => setLoading(false))
      .catch((err) => setError(err));
  }, [latitude, longitude, API_KEY]);
  console.log(dataCity);
  return (
    <MyContext.Provider
      value={{
        data,
        setData,
        dataCity,
        setDataCity,
        longitude,
        setLongitude,
        latitude,
        setLatitude,
        loading,
        setLoading,
        error,
        setError,
        // dataWeather,
        handleChangeState,
        handleChange,
        handleChangeCode,
        setSearchCountry,
        setInputCode,
        input,
        searchCountry,
        inputCode,
        setInput,
        searchState,
        setSearchState,
        handleSubmit,
        search,
        setSearch,
        inputState,
        setInputState,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
