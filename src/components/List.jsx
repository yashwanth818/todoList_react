import React from "react";

function List(props) {
  return (
    <div>
      <li onClick={() => props.delete(props.id)}>{props.item}</li>
    </div>
  );
}
export default List;
