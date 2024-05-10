import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// PascalCase
const PokemonList = () => {

    const [pokemons, setPokemons] = useState([]);
    const [filteredPokemons, setFilteredPokemons] = useState([]);
    const [keyWord, setKeyWord] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://pokebuildapi.fr/api/v1/pokemon/limit/100").then(response => {
            setPokemons(response.data);
            console.log(response.data);
        })
    }, [])

    const goToDetail = (id) => {
        navigate("/pokemon/" + id)
    }

    const searchByName = (keyWord) => {
        setFilteredPokemons(pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(keyWord)))
        console.log(filteredPokemons);
    }



    return (

        <>
            <div id="search">
                <input type="search" placeholder='saisissez un nom de pokémon' onChange={(e) => searchByName(e.target.value)}/>
            </div>
            <div id="pokemon-list">
                {filteredPokemons.map((pokemon, index) => (
                    <div key={index} className='card'>
                        <img src={pokemon.image} alt="pokemon-image" />
                        <h2>{pokemon.name}</h2>
                        <h4># {pokemon.pokedexId}</h4>
                        <div>
                            {pokemon.apiTypes.map((type, index) => (
                                <p key={index}>{type.name}</p>
                            ))}
                        </div>

                        <button onClick={() => goToDetail(pokemon.id)}>Voir {pokemon.name}</button>
                    </div>
                ))}
            </div>
        </>

    )
}

export default PokemonList;