import React from 'react';
import {Header} from "../../components/Header";
import { Link, useHistory } from 'react-router-dom';



const PokedexPage = () => {
  
    return (
  
      <div>
        <Header>
          <Link to={'/'}>
            <button>voltar para home</button>
          </Link>
            <p>POKéMONS ADICIONADOS</p>
        </Header>
      </div>
      
   
    )
  }
  
  export default PokedexPage