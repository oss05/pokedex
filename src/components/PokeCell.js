import React from 'react';

//Styles
import './Styles/PokeCell.css';

//Assets
import pokeSprites from '../assets/sprites/poke-sprites.png';

export default function PokeCell({pokeClass, handleClick}) {

    const {backgroundPosition, id} = pokeClass
    const style = {backgroundImage: `url(${pokeSprites})`, backgroundPosition}

    return(
        <button 
            className="poke-cell" 
            style={style}
            onClick={() => handleClick(id)}
        >
        </button>
    )
}