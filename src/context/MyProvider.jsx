import React from "react";
import { useEffect, useState } from "react";
import MyContext from "./MyContext";

const MyProvider = ({ children }) => {
  const [data, setData] = useState({
    results: null,
    loading: true,
    error: null,
  });
  const [dataCity, setDataCity] = useState({
    results: null,
    loading: true,
    error: null,
  });
  // const [dataWeather, setDataWeather] = useState({});
  const [input, setInput] = useState("");
  const [inputCode, setInputCode] = useState("");
  const [inputState, setInputState] = useState("");

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
      .then((data) => setData({ results: data, loading: false, error: null }))

      .catch((err) => setData({ results: null, loading: false, error: err }));
  }, [URI]);

  useEffect(() => {
    if (data.results) {
      setLongitude(data.results[0].lon);
      setLatitude(data.results[0].lat);
    }
  }, [data]);
  console.log(data);
  useEffect(() => {
    if (latitude && longitude) {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${API_KEY}`
      )
        .then((response) => response.json())
        .then((data) =>
          setDataCity({ results: data, loading: false, error: null })
        )

        .catch((err) =>
          setDataCity({ results: null, loading: false, error: err })
        );
    }
  }, [latitude, longitude, API_KEY]);

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
