import { Component, ReactNode } from "react";
import Nav from "./Nav";
import Forecast from "./Forecast";
import "../styles/components/Weather.css";

class Weather extends Component {
  render(): ReactNode {
    return (
      <div className="container">
        <Nav />
        <Forecast />
      </div>
    );
  }
}
export default Weather;
