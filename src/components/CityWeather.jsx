import { useContext } from "react";
import MyContext from "../context/MyContext";
import convertDay from "../helpers/convertDay";
import convertTemp from "../helpers/convertTemp";
import convertTime from "../helpers/convertTime";
import convertTimeTo24 from "../helpers/convertTimeTo24";

const CityWeather = () => {
  const context = useContext(MyContext);
  const { dataCity, data, error } = context;
  console.log(dataCity);

  return (
    <div
      className="app_container
    "
    >
      <h3> current weather</h3>
      <div className="current_temp">
        <p>
          {data[0].name}, {data[0].country}
        </p>
        <p>
          {convertTemp(dataCity.current.temp)}
          °C
        </p>
        <img
          src={`http://openweathermap.org/img/wn/${dataCity.current.weather[0].icon}.png`}
          alt=""
        />
        <p className="weather_description">
          {dataCity.current.weather[0].description}
          {/* <p>{convertTimeTo24(convertTime(dataCity.current.dt))}</p> */}
        </p>
        <p className="sun_rise_set">
          sunrise {convertTimeTo24(convertTime(dataCity.current.sunrise))}{" "}
          <p>sunset {convertTimeTo24(convertTime(dataCity.current.sunset))}</p>
        </p>
        <p className="alert_message">
          {dataCity.alerts &&
            dataCity.alerts[0].description &&
            dataCity.alerts[0].description}
        </p>
      </div>

      <h3> dayily forcast </h3>

      <div className="daily_forcast">
        {dataCity.daily.map((el, key) => (
          <tr className="daily_day_temp">
            <td>{convertDay(el.dt)}</td>
            <td>{el.humidity}%</td>
            <td>{convertTemp(el.temp.day)}°C</td>
            <td>
              <img
                className="img_container"
                src={`http://openweathermap.org/img/wn/${el.weather[0].icon}.png`}
                alt=""
              />
            </td>

            {/* <td className="weather_description">
                {el.weather[0].description}
              </td> */}
          </tr>
        ))}
      </div>

      <div className="hourly_forcast">
        <h3>hourly forcast</h3>
        <table>
          {/* <th>date</th>
          <th>temp</th>
          <th>feels_like</th>
          <th>humidity</th>
          <th>description</th>
          <th>wind_speed</th> */}

          {dataCity.hourly.map((el, key) => (
            <td className="hourly_forcast_time">
              <tr>{convertTimeTo24(convertTime(el.dt))}</tr>

              <tr className="hourly_forcast_temp">{convertTemp(el.temp)} °C</tr>
              {/* k */}
              <tr>
                {/* {el.weather[0].main} */}
                <img
                  src={`http://openweathermap.org/img/wn/${el.weather[0].icon}.png`}
                  alt=""
                />
              </tr>
              {/* <td>{el.wind_speed}km/h</td> */}
            </td>
          ))}
        </table>
      </div>
      {error && error}
    </div>
  );
};

export default CityWeather;
