import { Component, ReactNode } from "react";
import Nav from "./Nav";
import WeatherDetails from "./WeatherDetails";
import "../styles/components/Weather.css";

interface IProps {}

interface IState {
  loading: boolean;
  weatherData: object;
  error: boolean;
}
class Weather extends Component<IProps, IState> {
  state = {
    loading: true,
    weatherData: {},
    error: false,
  };

  getWeatherData = (city: string) => {
    this.setState({
      loading: true,
      weatherData: {},
      error: false,
    });

    var url = `https://goweather.herokuapp.com/weather/${city}`;

    fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Couldn't connect to the server");
        }
        return response.json();
      })
      .then((weatherData) => {
        this.setState({
          loading: false,
          weatherData: weatherData,
          error: false,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          weatherData: {},
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
