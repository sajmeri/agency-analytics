import { Component, ReactNode } from "react";
import Nav from "./Nav";
import WeatherDetails from "./WeatherDetails";
import {
  initialWeatherData,
  getWeatherAPIURL,
  filterWeatherData,
} from "../helpers/weatherAPI";
import { IApplicationState } from "../interfaces/WeatherData";

import "../assets/styles/components/Weather.css";

interface IProps {}

class Weather extends Component<IProps, IApplicationState> {
  state = {
    loading: true,
    weatherData: initialWeatherData,
    error: false,
  };

  getWeatherData = async (city: string) => {
    this.setState({
      loading: true,
      weatherData: initialWeatherData,
      error: false,
    });

    try {
      const url = getWeatherAPIURL(city);

      const response = await fetch(url);

      if (response.status >= 200 && response.status < 300) {
        const data = await response.json();
        const filteredData = filterWeatherData(data);
        this.setState({
          loading: false,
          weatherData: filteredData,
          error: false,
        });
      } else {
        throw new Error("Couldn't connect to server!");
      }
    } catch (e) {
      this.setState({
        loading: false,
        weatherData: initialWeatherData,
        error: true,
      });
    }
  };

  componentDidMount(): void {
    this.getWeatherData("ottawa");
  }

  render(): ReactNode {
    const { loading, weatherData, error } = this.state;
    return (
      <div className="container">
        <Nav handleNavClick={this.getWeatherData} />
        {loading && <div className="message loading">...Fetching data!</div>}

        {error && (
          <div className="message error">
            Couldn't fetch weather data! Please try again later!
          </div>
        )}

        {!loading && !error && <WeatherDetails weatherData={weatherData} />}
      </div>
    );
  }
}
export default Weather;
