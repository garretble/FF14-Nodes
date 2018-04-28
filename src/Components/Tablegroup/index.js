import React from "react";
import ItemTable from "./ItemTable";

class Tablegroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      title: "",
      filterText: ""
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  componentDidMount() {
    const sheetID = "1ENlvVZ5ubphugcGprnE3jJ6xzptKIFyEzDUeOjNZCdU";
    console.log(
      "https://spreadsheets.google.com/feeds/list/" +
        sheetID +
        "/" +
        this.props.sheetNumber +
        "/public/values?alt=json"
    );
    fetch(
      "https://spreadsheets.google.com/feeds/list/" +
        sheetID +
        "/" +
        this.props.sheetNumber +
        "/public/values?alt=json"
    )
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        let itemsCopy = [];
        for (let i = 0; i < responseJson.feed.entry.length; i++) {
          itemsCopy.push(responseJson.feed.entry[i]);
        }
        this.setState({ items: itemsCopy, title: responseJson.feed.title.$t });
      });
  }

  handleFilterTextChange(filterText) {
    this.setstate({ filterText: filterText });
  }

  render() {
    return (
      <div className="col-12">
        <h2>
          <a name="mining-nodes">{this.state.title}</a>
        </h2>
        <ItemTable items={this.state.items} hour={this.props.hours} />
      </div>
    );
  }
}

export default Tablegroup;
