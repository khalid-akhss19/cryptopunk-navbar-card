import React from "react";
import data from "../Pages/Home/Data";
import CollectionCard from "../CollectionCard";
import "./style.css";

const Card = () => {
  return (
    <div className="FLexCard">
      {data.map(({ img, num, title, price }) => {
        return (
          <CollectionCard img={img} title={title} num={num} price={price} />
        );
      })}
    </div>
  );
};

export default Card;
