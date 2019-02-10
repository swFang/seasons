import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  // Have to define Render
  constructor(props) {
    super(props);
    //super is same as java. (parent class constructor, in this case React componenet)
    this.state = { lat: null };
    //ONLY TIME we do direct assignment to this.state
    window.navigator.geolocation.getCurrentPosition(
      position => {
          this.setState({lat: position.coords.latitude});
      },
      err => console.log(err)
    );
  }

  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
