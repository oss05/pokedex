import React from 'react';

//Components
import PokeCell from './PokeCell';
import PokeClasses from './PokeClasses';

//Styles
import './Styles/PokeList.css';

export default function PokeList({handleClick, pokemon}) {

    const cells = PokeClasses.map( pokeClass => {
        return(
            <PokeCell 
                pokeClass={pokeClass}
                key={pokeClass.id}
                handleClick={handleClick}
                pokemon={pokemon}
            /> 
        )
    });
    
   

    return(
        <section className="poke-list">
            {cells}
        </section>
    )
}