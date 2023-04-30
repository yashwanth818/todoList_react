import React from "react";

function List(props) {
  return (
    <div>
      <ul>
        <li onClick={() => props.delete(props.id)}>{props.item}</li>
      </ul>
    </div>
  );
}
export default List;
