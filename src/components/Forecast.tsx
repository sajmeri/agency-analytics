import { Component, ReactNode } from "react";
import "../styles/components/Weather.css";

class Forecast extends Component {
  render(): ReactNode {
    return (
      <div className="weather-data">
        <div className="observations">Observations</div>
        <div className="forecast">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </div>
    );
  }
}
export default Forecast;
