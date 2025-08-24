import React from "react";

const Card = ({
  index,
  title,
  description,
  img,
  profile,
  price,
  button,
  handleClick,
}) => {
  return (
    <div className="card background">
      <div className="card-image">{img && <img src={img} alt="" />}</div>
      <div className="card-content" style={price && { textAlign: "center" }}>
        {index && <span className="index">0{index}</span>}
        {profile && <img src={profile} alt="" className="profile-img" />}
        <span className="lg-title">{title}</span>
        <p className="description">{description}</p>
        {price && <span className="price">{price}&#8377;</span>}
        {button && <button onClick={handleClick}>{button}</button>}
      </div>
    </div>
  );
};

export default Card;
