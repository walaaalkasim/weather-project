import { useContext } from "react";
import MyContext from "../context/MyContext";
import convertDay from "../helpers/convertDay";
import convertTemp from "../helpers/convertTemp";
import convertTime from "../helpers/convertTime";
import convertTimeTo24 from "../helpers/convertTimeTo24";

const CityWeather = () => {
  const context = useContext(MyContext);
  const { dataCity, data } = context;
  console.log(dataCity.results);

  return (
    <div className="app_container">
      <h3> current weather</h3>
      <div className="current_temp">
        <p>
          {data.results[0].name}, {data.results[0].country}
        </p>
        <p>
          {convertTemp(dataCity.results.current.temp)}
          °C
        </p>
        <img
          src={`http://openweathermap.org/img/wn/${dataCity.results.current.weather[0].icon}.png`}
          alt=""
        />
        <p className="weather_description">
          {dataCity.results.current.weather[0].description}
        </p>
        <p className="sun_rise_set">
          sunrise
          {convertTimeTo24(convertTime(dataCity.results.current.sunrise))}
          <p>
            sunset
            {convertTimeTo24(convertTime(dataCity.results.current.sunset))}
          </p>
        </p>
        <p className="alert_message">
          {dataCity.results.alerts &&
            dataCity.results.alerts[0].description &&
            dataCity.results.alerts[0].description}
        </p>
      </div>
      <h3> dayily forcast </h3>
      <div className="daily_forcast">
        {dataCity.results.daily.map((el, key) => (
          <tr className="daily_day_temp" key={key}>
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
          </tr>
        ))}
      </div>
      <h3>hourly forcast</h3>
      <div className="hourly_forcast">
        <table>
          {dataCity.results.hourly.map((el, key) => (
            <td className="hourly_forcast_time" key={key}>
              <tr>{convertTimeTo24(convertTime(el.dt))}</tr>

              <tr className="hourly_forcast_temp">{convertTemp(el.temp)} °C</tr>

              <tr>
                <img
                  src={`http://openweathermap.org/img/wn/${el.weather[0].icon}.png`}
                  alt=""
                />
              </tr>
            </td>
          ))}
        </table>
      </div>
      {/* {error && error} */}
    </div>
  );
};

export default CityWeather;
