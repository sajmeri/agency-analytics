import { Component, ReactNode } from "react";
import "../assets/styles/Nav.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { WeatherCitiesAndUrls } from "../helpers/weatherAPI";
interface IProps {
  handleNavClick: (city: string) => void;
}
class Nav extends Component<IProps> {
  render(): ReactNode {
    let { handleNavClick } = this.props;
    const cities: string[] = [];
    for (const city in WeatherCitiesAndUrls) {
      cities.push(city);
    }
    const homeCity = cities.length && cities[0];
    return (
      <div className="nav">
        <Router>
          <ul>
            {cities.map((city) => {
              return (
                <li key={city}>
                  <NavLink
                    className={({ isActive }) =>
                      [isActive ? "active" : null].filter(Boolean).join(" ")
                    }
                    to={city === homeCity ? "/" : `/${city}`}
                    onClick={() => handleNavClick(city)}
                  >
                    {city.toUpperCase()}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </Router>
      </div>
    );
  }
}
export default Nav;
