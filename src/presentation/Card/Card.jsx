import React from "react";
import "./card.scss";

function Card(props) {
  return (
    <div className="card">
      <div>
        <h2 className="card__title">{props.name}</h2>
        <p><span className="card__category">Вселенная: </span>{props.universe}</p>
        <p><span className="card__category">Альтер-эго: </span>{props.alterego}</p>
        <p><span className="card__category">Род деятельности: </span>{props.occupation}</p>
        <p><span className="card__category">Друзья: </span>{props.friends}</p>
        <p><span className="card__category">Суперсилы: </span>{props.superpowers}</p>
        <details>
          <summary className="card__details">Подробнее</summary>
          <p>{props.info}</p>
        </details>
      </div>
      <img src={props.url} alt={props.name} className="card__image" />
    </div>
  );
}

export { Card };