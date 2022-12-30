import { Component, ReactNode } from "react";
import { IWeatherData } from "../interfaces/WeatherData";
import "../styles/components/Weather.css";

interface IProps {
  forecastData: IWeatherData[];
}
class Forecast extends Component<IProps> {
  render(): ReactNode {
    const { forecastData } = this.props;

    return (
      <div className="forecast">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    );
  }
}
export default Forecast;
