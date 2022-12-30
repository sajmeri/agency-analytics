import { Component, ReactNode } from "react";
import Observations from "./Observations";
import Forecast from "./Forecast";
import "../styles/components/Weather.css";

interface IProps {
  weatherData: object;
}
class WeatherDetails extends Component<IProps> {
  render(): ReactNode {
    const { weatherData } = this.props;

    return (
      <div className="weather-data">
        <Observations weatherData={weatherData} />
        <Forecast weatherData={weatherData} />
      </div>
    );
  }
}
export default WeatherDetails;
