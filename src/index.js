import React from "react";
import ReactDOM from "react-dom";
import "./color.css";

class App extends React.Component {
  state = {
    btn_color: "button-red"
  };

  onClick = (event) => {
    this.setState({
      btn_color: "button-grey"
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.onClick} className={this.state.btn_color}>
          Click Me!
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
