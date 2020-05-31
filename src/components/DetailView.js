import React from 'react';

//Styles
import './Styles/DetailView.css';

export default function DetailView({pokemon}) {

    let {id, name, sprite, type, weight} = pokemon;
    name = name.toUpperCase();
    type= type.toUpperCase();
    weight = (weight/2.2046).toFixed(2);

    return (
        <section className="detail-view">
            <img className="sprite-image" src={sprite} alt={name} />
            <div className="data-wrapper">
                <h1 className="data-name">ID: {id}</h1>
                <p className="data-char">Name: {name}</p>
                <p className="data-char">Type: {type}</p>
                <p className="data-char">Weight: {weight}kg</p>
            </div>
        </section>
    )
}