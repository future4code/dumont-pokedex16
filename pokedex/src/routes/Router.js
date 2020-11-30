import { BrowserRouter, Switch, Route} from "react-router-dom";
import React from 'react';
import HomePage from "../pages/homePage/homePage";
import PokedexPage from "../pages/pokedexPage/pokedexPage";
import DetailsPage from "../pages/detailsPage/detailsPage";



function Router() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/pokedex">
            <PokedexPage />
          </Route>
          <Route exact path="/details">
            <DetailsPage />
          </Route>
          <Route>
             <div>404: Página não encontrada</div>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
  
  export default Router;