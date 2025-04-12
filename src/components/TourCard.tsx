// src/components/TourCard.tsx
import React, { useState } from "react";
import type { FC } from "react";


import "./styles.css";

type Props = {
  id: string;
  name: string;
  info: string;
  price: string;
  image: string;
  onRemove: (id: string) => void;
};

const TourCard: FC<Props> = ({ id, name, info, price, image, onRemove }) => {

  const [readMore, setReadMore] = useState(false);

  return (
    <article className="tour-card">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 100)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );  
}
