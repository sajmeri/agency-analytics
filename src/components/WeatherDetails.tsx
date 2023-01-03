import { Component, ReactNode } from "react";
import Observations from "./Observations";
import Forecast from "./Forecast";
import { ICityWeatherData } from "../interfaces/WeatherData";
import "../assets/styles/Weather.css";

interface IProps {
  weatherData: ICityWeatherData;
}
class WeatherDetails extends Component<IProps> {
  render(): ReactNode {
    const { weatherData } = this.props;

    return (
      <div className="weather-data">
        <Observations obsData={weatherData.obs} />
        <Forecast forecastData={weatherData.forecast} />
      </div>
    );
  }
}
export default WeatherDetails;
