import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay"

class App extends React.Component {
  // Have to define Render
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // this is a callback
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    // called whenever stat is updated.
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error :{this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    }
    return <div>... loading </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
