import { Component, ReactNode } from "react";
import Nav from "./Nav";
import WeatherDetails from "./WeatherDetails";
import {
  initialWeatherData,
  getWeatherAPIURL,
  filterWeatherData,
} from "../helpers/weatherAPI";
import { IApplicationState } from "../interfaces/WeatherData";

import "../styles/components/Weather.css";

interface IProps {}

class Weather extends Component<IProps, IApplicationState> {
  state = {
    loading: true,
    weatherData: initialWeatherData,
    error: false,
  };

  getWeatherData = (city: string) => {
    this.setState({
      loading: true,
      weatherData: initialWeatherData,
      error: false,
    });

    const url = getWeatherAPIURL(city);

    fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Couldn't connect to the server");
        }
        return response.json();
      })
      .then((weatherData) => {
        const filteredData = filterWeatherData(weatherData);
        this.setState({
          loading: false,
          weatherData: filteredData,
          error: false,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          weatherData: initialWeatherData,
          error: true,
        });
      });
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
