import React from "react";

class Timer extends React.Component {
  displayMinutes() {
    let minutes = this.props.minutes + "";
    while (minutes.length < 2) minutes = "0" + minutes;
    return minutes;
  }
  render() {
    return (
      <div className="bg-dark position-fixed fixed-bottom text-center py-2">
        <span className="text-white">
          Eorzea Time: {this.props.hours}:{this.displayMinutes()}
        </span>
      </div>
    );
  }
}

export default Timer;
