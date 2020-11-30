import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import axios from 'axios'




const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 360px;
  border: 1px solid black;
  margin-top: 10%;
`



const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  height: 100px;
  border: 1px solid black;
`


export function PokeCard(props) {
  const history = useHistory();
  const [pokemonImage, setPokemonImage] = useState();

  
  

  const getPokemonImage = (pokemon) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
      .then((resposta) => {
        setPokemonImage(resposta.data.sprites.front_default);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getPokemonImage();
  }, []);

  return (
      <MainContainer
        backgroundImage={props.backgroundImage}>
        <img src={pokemonImage} />
        <h3>{props.name}</h3>
          <ButtonContainer>
              <button>adicionar</button>
              <Link to={'/details'}>
                  <button>ver detalhe</button>
              </Link>
          </ButtonContainer>
      </MainContainer>
  )
};


  