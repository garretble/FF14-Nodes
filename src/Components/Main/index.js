import React from "react";
import Tablegroup from "../Tablegroup";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sheetNumber: 2
    };
  }
  render() {
    let tables = [];
    for (let i = 1; i < this.state.sheetNumber; i++) {
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
        <div className="bg-dark position-fixed fixed-bottom text-center py-2">
          <span className="text-white">
            {/* Eorzea Time: {this.state.hours}:{this.displayMinutes()} */}
          </span>
        </div>
      </main>
    );
  }
}

export default Main;
