import { Component, ReactNode } from "react";
import "../styles/components/Weather.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

interface IProps {
  handleNavClick: (city: string) => void;
}
class Nav extends Component<IProps> {
  render(): ReactNode {
    let { handleNavClick } = this.props;
    return (
      <div>
        <Router>
          <ul>
            <li>
              <Link to="ottawa" onClick={() => handleNavClick("ottawa")}>
                OTTAWA
              </Link>
            </li>
            <li>
              <Link to="moscow" onClick={() => handleNavClick("moscow")}>
                MOSCOW
              </Link>
            </li>
            <li>
              <Link to="tokyo" onClick={() => handleNavClick("tokyo")}>
                TOKYO
              </Link>
            </li>
          </ul>
        </Router>
      </div>
    );
  }
}
export default Nav;
