import {useState, useEffect} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom"


const PokemonDetail = () => {

    const {id} = useParams();

    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
        console.log(id);
        axios.get("https://pokebuildapi.fr/api/v1/pokemon/" + id).then(response => {
            setPokemon(response.data);
            console.log(response.data);
        })
    }, [])
    return (
        <div className='card'>
            <img src={pokemon.image} alt="pokemon-image" />
            <h2>{pokemon.name}</h2>
            <h4># {pokemon.pokedexId}</h4>
            <div>
                {pokemon.apiTypes?.map((type, index) => (
                    <img src={type.image} alt="" key={index} />
                ))}
            </div>

            <button onClick={() => goToDetail(pokemon.id)}>Voir {pokemon.name}</button>
        </div>
    )
}

export default PokemonDetail;