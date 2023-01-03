import { Component, ReactNode } from "react";
import { IWeatherData } from "../interfaces/WeatherData";
import "../assets/styles/Forecast.css";

interface IProps {
  forecastData: IWeatherData[];
}
class Forecast extends Component<IProps> {
  render(): ReactNode {
    const { forecastData } = this.props;
    return (
      <div className="forecast">
        {forecastData.map((day) => {
          return (
            <div className="day-column" key={day.dayName}>
              <h3>{day.dayName}</h3>
              <p className="wx-icon">
                <img
                  src={`https://j.theweathernetwork.com/wx_icons/v1/${day.wxIcon}.png`}
                  alt={day.wxCondition}
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
