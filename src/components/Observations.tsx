import { Component, ReactNode } from "react";
import "../styles/components/Weather.css";

interface IProps {
  weatherData: object;
}
class Observations extends Component<IProps> {
  render(): ReactNode {
    const { weatherData } = this.props;

    return <div className="observations">Observations</div>;
  }
}
export default Observations;
