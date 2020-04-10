import React from "react";

const Card = ({ property }) => {
  const { name, description, picture, index } = property;

  return (
    <div id={`card-${index}`} className="card">
      <img src={picture} />
    </div>
  );
};

export default Card;
