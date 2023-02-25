import React from "react";
import "./card.css";

const Card = ({ handleAdded, data, cardIndex, selected }) => {
  const { image, title } = data;
  return (
    <>
      <div className="card">
        <img src={image} alt="" />
        <p>{title}</p>
        <button
          disabled={selected}
          onClick={() => {
            handleAdded(cardIndex);
          }}
        >{selected ? "اضافه شد" : "افزودن"}</button>
      </div>
    </>
  );
};

export default Card;
