import React from 'react';
import { DetailsContainer, ImagesContainer, StatsContainer, TypesMovesContainer } from './styled';
import {Header} from '../../components/Header';
import { Link, useHistory } from 'react-router-dom';

const Details = () => {
    return (
        <div>
           <Header>
          <Link to={'/'}>
            <button>voltar para home</button>
          </Link>
            <p>POKéMONS ADICIONADOS</p>
        </Header>


            <DetailsContainer>
                <ImagesContainer>
                    <div>
                        <img src='https://picsum.photos/200' />
                    </div>

                    <div>
                        <img src='https://picsum.photos/200' />
                    </div>
                </ImagesContainer>

                <StatsContainer>
                    stats
                </StatsContainer>

                <TypesMovesContainer>
                    <div>tipo</div>
                    <div>moves</div>
                </TypesMovesContainer>
            </DetailsContainer>
        </div>
    )
};

export default Details;