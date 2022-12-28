import { Component, ReactNode } from "react";
import "../styles/components/Weather.css";

class Nav extends Component {
  render(): ReactNode {
    return (
      <div>
        <ul>
          <li>
            <a href="#">OTTAWA</a>
          </li>
          <li>
            {" "}
            <a href="#">MOSCOW</a>
          </li>
          <li>
            {" "}
            <a href="#">TOKYO</a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Nav;
