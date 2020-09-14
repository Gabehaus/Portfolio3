import React from "react";

const Card = ({ property }) => {
  const { name, description, picture, index, classNm } = property;

  return (
    <div id={`card-${index}`} className={classNm}>
      <img src={picture} />
    </div>
  );
};

export default Card;
