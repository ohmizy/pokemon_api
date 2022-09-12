import axios from 'axios' // THE DOWNLOAD COMMAND FOR THE TERMINAL IS NPM I AXIOS
import React, { useState } from 'react' // NEEDED WHENEVER YOU USE SETSTATE

const Pokemon = () => {
    // STATE
    // CREATE STATE FOR THE API TO STORE THE RESPONSE
    const [pokemons, setPokemon] = useState([]); // SETSTATE IS A FUNCTION 

    // HANDLER FUNCTIONS
    const fetchPokemon = () => {
        // USE AXIOS TO FETCH POKEMON NAMES FROM THE POKEMON API
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(response => setPokemon(response.data.results)) // IF YOUR API CALL IS SUCCESSFUL, THIS WILL EXECUTE
            .catch(error => console.log(error)) // IF YOUR API IS UNSUCCESSFUL, THIS WILL TELL YOU WHAT ERRORS HAPPEN
        // STORE RESPONSE INFORMATION INSIDE STATE
        console.log('test')
    }
    // HTML / REACT CODE
    return (
        <div>
            <button onClick={fetchPokemon}>Fetch Pokemon</button>
            {/* ITERATES THROUGH POKEMONS */}
            {pokemons.map(animal => { // THE NAME ANIMAL WAS MADE BY ME
                return( //NEVER FORGET YOUR RETURN STATEMENT
                    <p>{animal.name}</p> // .NAME SPECIFIES A SPECIFIC KEY IN THE OBJECT
                )
            })}
        </div>
    )
}

export default Pokemon // RAFCE