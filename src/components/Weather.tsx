import { Component, ReactNode } from "react";
import Nav from "./Nav";
import Forecast from "./Forecast";
import "../styles/components/Weather.css";

interface IProps {}

interface IState {
  loading: boolean;
  weatherData: object;
  error: boolean;
}
class Weather extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      loading: true,
      weatherData: {},
      error: false,
    };
  }

  getWeatherData = (city: string) => {
    var url = `https://goweather.herokuapp.com/weather/${city}`;

    fetch(url)
      .then((response) => response.json())
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
    return (
      <div className="container">
        <Nav handleNavClick={this.getWeatherData} />
        <Forecast />
      </div>
    );
  }
}
export default Weather;
