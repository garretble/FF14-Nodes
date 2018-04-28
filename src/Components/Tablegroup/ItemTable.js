import React from "react";
import Item from "./Item";

const ItemTable = props => {
  return (
    <table className="table table-striped text-center table-sm">
      <thead className="thead-dark">
        <tr>
          <th>Level</th>
          <th>Name</th>
          <th>Slot</th>
          <th>Location</th>
          <th>Coordinates</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((item, index) => (
          <Item
            key={item.gsx$name.$t}
            level={item.gsx$level.$t}
            name={item.gsx$name.$t}
            location={item.gsx$location.$t}
            coord={item.gsx$coordinates.$t}
            startTime={item.gsx$time.$t}
            url={item.gsx$url.$t}
            slot={item.gsx$slot.$t}
            hour={props.hour}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ItemTable;
