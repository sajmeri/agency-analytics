import { Component, ReactNode } from "react";
import Weather from "./components/Weather";
import "./styles/App.css";
class App extends Component {
  render(): ReactNode {
    return (
      <div className="App">
        <Weather />
      </div>
    );
  }
}

export default App;
