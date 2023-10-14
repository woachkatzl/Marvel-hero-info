import React from "react";
import "./card.scss";

function Card(props) {
    return (
        <div className="card">
            <h2 className="card__title">{props.name}</h2>
            <p className="card__info-line"><span className="card__category">Вселенная: </span>{props.universe}</p>
            <p className="card__info-line"><span className="card__category">Альтер-эго: </span>{props.alterego}</p>
            <p className="card__info-line"><span className="card__category">Род деятельности: </span>{props.occupation}</p>
            <p className="card__info-line"><span className="card__category">Друзья: </span>{props.friends}</p>
            <p className="card__info-line"><span className="card__category">Суперсилы: </span>{props.superpowers}</p>
            <img src={props.url} alt={props.name} className="card__image" />
        </div>
    )
}

export { Card };