import React from "react";
import Tablegroup from "../Tablegroup/Tablegroup";
import Timer from "../Timer/Timer";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sheetNumber: 2,
      minutes: null,
      hours: null
    };
  }

  componentDidMount() {
    this.timeUpdate();
    this.timerID = setInterval(() => this.timeUpdate(), 2500);
  }

  timeUpdate() {
    let localEpoch = new Date().getTime();
    let epoch = localEpoch * 20.571428571428573;
    let minutes = parseInt((epoch / (1000 * 60)) % 60);
    let hours = parseInt((epoch / (1000 * 60 * 60)) % 24);
    document.title = hours + ":" + minutes + " FFXIV Unspoiled Nodes";
    this.setState({
      minutes: minutes,
      hours: hours
    });
  }

  render() {
    let tables = [];
    for (let i = 1; i <= this.state.sheetNumber; i++) {
      tables.push(
        <Tablegroup key={i} sheetNumber={i} hours={this.state.hours} />
      );
    }
    return (
      <main>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center">Nodes!</h1>
            </div>
            {tables}
          </div>
        </div>
        <Timer hours={this.state.hours} minutes={this.state.minutes} />
      </main>
    );
  }
}

export default Main;
