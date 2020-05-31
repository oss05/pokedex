import React, { useState } from 'react';

//Components
import PokeList from './PokeList';
import DetailView from './DetailView';

//Styles
import './Styles/Wireframe.css';

export default function Wireframe() {

    const [pokemon, updatePokemon] = useState({
            id: '',
            name: '',
            sprite: '',
            type: '',
            weight: ''
    })

    async function handleClick(id) {
        let pokemon = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${id}/`
        )

        let main = await pokemon.json();
        
        updatePokemon({
            id: main.id,
            name: main.name,
            sprite: main.sprites.front_default,
            type: main.types[0].type.name,
            weight: main.weight
        })
    }

    return (
        <main className="wireframe-container">
            <PokeList
                handleClick={handleClick}
                pokemon={pokemon}
            />
            <DetailView
                pokemon={pokemon}
            />
        </main>
    );
}