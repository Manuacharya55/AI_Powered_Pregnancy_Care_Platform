import React from "react";

const Latest = ({title,name,data}) => {
  return (
    <div className="latest background">
      <h3 id="action">{title}</h3>
      <p id="lt-title">{name}</p>
      <p id="lt-res">{data}</p>
    </div>
  );
};

export default Latest;
