import { Component, ReactNode } from "react";
import { IObsData } from "../interfaces/WeatherData";
import "../styles/components/Observations.css";

interface IProps {
  obsData: IObsData;
}
class Observations extends Component<IProps> {
  render(): ReactNode {
    const { obsData } = this.props;
    return (
      <div className="observations">
        <h2>Today</h2>
        <div className="obs-details">
          <div className="obs-icon">
            <img
              src={`https://j.theweathernetwork.com/wx_icons/v1/${obsData.wxIcon}.png`}
              width="150"
              height="150"
            />
          </div>
          <div className="obs-data">
            <p className="temperature">{obsData.temperature}&deg;</p>
            <br />
            <p className="condition">{obsData.wxCondition}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Observations;
