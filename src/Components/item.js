import React from "react";
const Item = (props) => {
  return (
    <div className="item-container">
      <span className="text-label">{props.name}</span>
    </div>
  );
};
export default Item;
