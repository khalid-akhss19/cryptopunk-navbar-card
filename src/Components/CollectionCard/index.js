import React from "react";
import "./style.css";
import eth from "../../assets/eth.png";

const CollectionCard = ({ img, num, title, price }) => {
  return (
    <div className="CollectionCardContainer">
      <div className="ImageCard">
        <img src={img} alt="cryptopunk" className="punkCardImage" />
      </div>
      <div className=" ImageCard block2">
        <div className="cardtext">
          <h2 className="card_title">{title}</h2>
          <h3 className="card_no">{num}</h3>
          <div className="cardPrice">
            <img src={eth} className="ethimg" alt="eth" />
            <h4 className="price">{price}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
