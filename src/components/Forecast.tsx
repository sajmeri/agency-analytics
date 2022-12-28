import { Component, ReactNode } from "react";
import "../styles/components/Weather.css";

class Forecast extends Component {
  render(): ReactNode {
    return (
      <div className="forecast">
        <h1>Forecast</h1>
      </div>
    );
  }
}
export default Forecast;
