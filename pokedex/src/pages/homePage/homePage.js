import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CardsContainer} from "./styled";
import {Header} from '../../components/Header';
import {PokeCard} from '../../components/PokeCard';
import { Link, useHistory } from 'react-router-dom';

const Home = () => {
  const [pokemonList, setPokemonList] = useState([])

  const getPokemon = () => {
      axios
          .get('https://pokeapi.co/api/v2/pokemon/')
          .then((response) => {
              setPokemonList(response.data.results)
          })
          .catch((error) => {
              console.log(error)
          })
  }

  useEffect(() => {
      getPokemon()
  }, [])

  

  const pokemonsPokeCard = pokemonList.map((pokemon) => {
    return (
          <PokeCard name= {pokemon.name} />
      )
  })
  
  return (
    <div>

      <Header>
      
        <Link to={'/pokedex'}>
            <button>Ir para POKEDEX</button>
        </Link>
        <p> LISTA DE POKéMONS </p>
      </Header>

      <CardsContainer>
        {pokemonsPokeCard}
      </CardsContainer>
    </div>
    
 
  )
}

export default Home
