import { Component, ReactNode } from "react";
import "../styles/components/Weather.css";

interface IProps {
  weatherData: object;
}
class Forecast extends Component<IProps> {
  render(): ReactNode {
    const { weatherData } = this.props;

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
