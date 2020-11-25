import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components'

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


export const PokeCard = () => {
  return (
      <MainContainer>
          <p>pokecard</p>
          <ButtonContainer>
              <button>adicionar</button>
              <Link to={'/details'}>
                  <button>ver detalhe</button>
              </Link>
          </ButtonContainer>
      </MainContainer>
  )
};


  