import React from "react";

const Item = props => {
  let hour = props.hour > 12 ? props.hour - 12 : props.hour;
  let active =
    Number(props.startTime) <= hour && hour <= Number(props.startTime) + 1
      ? "active"
      : null;
  let coords = props.coord.split(",");

  return (
    <tr className={active}>
      <th scope="row">{props.level}</th>
      <td>
        <a
          href={props.url}
          className="eorzeadb_link"
          target="_blank"
          title={props.name + " on Lodestone"}
        >
          {props.name}
        </a>
      </td>
      <td>{props.slot}</td>
      <td>{props.location}</td>
      <td>
        x{coords[0]}, y{coords[1]}
      </td>
      <td>{props.startTime}:00 am/pm</td>
    </tr>
  );
};

export default Item;
