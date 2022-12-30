import { Component, ReactNode } from "react";
import { IObsData } from "../interfaces/WeatherData";
import "../styles/components/Weather.css";

interface IProps {
  obsData: IObsData;
}
class Observations extends Component<IProps> {
  render(): ReactNode {
    const { obsData } = this.props;

    return <div className="observations">Observations</div>;
  }
}
export default Observations;
