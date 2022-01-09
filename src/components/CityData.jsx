import { useContext } from "react";
import MyContext from "../context/MyContext";
// import convertTime from "../helpers/convertTime";

// import { WiSunrise, WiSunset } from "react-icons/wi";

const CityData = () => {
  // let sunrise, sunset;

  const context = useContext(MyContext);
  const { data, dataCity } = context;

  // if (dataCity.sunrise) {
  //   sunrise = convertTime(dataCity.sunrise);
  //   sunset = convertTime(dataCity.sunset);
  // }{dataCity && dataCity > 0}

  return (
    <div>
      <div>
        {/* {data[0].name} ,lat: {data[0].lat} , lon:{data[0].lon} */}
        {/* {data.map((item, index) => (
          <span>
            <p>
              {item.name}, {item.country}
            </p>
            <p></p>
          </span>
        ))} */}
        {/* <div className="container">
        <WiSunrise />
        <p className="sun_rise_set">sunrise: {sunrise}</p>
        <WiSunset />
        <p className="sun_rise_set">sunset: {sunset}</p>
      </div> */}
      </div>
    </div>
  );
};

export default CityData;
