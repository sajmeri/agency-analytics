import { Component, ReactNode } from "react";
import { IWeatherData } from "../interfaces/WeatherData";
import "../styles/components/Forecast.css";

interface IProps {
  forecastData: IWeatherData[];
}
class Forecast extends Component<IProps> {
  render(): ReactNode {
    const { forecastData } = this.props;
    //https://j.theweathernetwork.com/wx_icons/v1/28.png
    return (
      <div className="forecast">
        {forecastData.map((day) => {
          return (
            <div className="day-column">
              <h3>{day.dayName}</h3>
              <p className="wx-icon">
                <img
                  src={`https://j.theweathernetwork.com/wx_icons/v1/${day.wxIcon}.png`}
                  width="70"
                  height="70"
                />
              </p>
              <p className="temperature">{day.temperature}&deg;</p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Forecast;
