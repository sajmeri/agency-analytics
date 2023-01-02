import { Component, ReactNode } from "react";
import "../styles/components/Nav.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

interface IProps {
  handleNavClick: (city: string) => void;
}
class Nav extends Component<IProps> {
  render(): ReactNode {
    let { handleNavClick } = this.props;
    return (
      <div className="nav">
        <Router>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  [isActive ? "active" : null].filter(Boolean).join(" ")
                }
                to="/"
                onClick={() => handleNavClick("ottawa")}
              >
                OTTAWA
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  [isActive ? "active" : null].filter(Boolean).join(" ")
                }
                to="moscow"
                onClick={() => handleNavClick("moscow")}
              >
                MOSCOW
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  [isActive ? "active" : null].filter(Boolean).join(" ")
                }
                to="tokyo"
                onClick={() => handleNavClick("tokyo")}
              >
                TOKYO
              </NavLink>
            </li>
          </ul>
        </Router>
      </div>
    );
  }
}
export default Nav;
