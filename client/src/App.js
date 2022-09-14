import './App.css';
import { Route, Switch } from 'react-router-dom';
import {NavBar} from './componentes/NavBar';
import {Home} from './componentes/Home';
import {Search} from './componentes/Search';
import { Details } from './componentes/Details';
import { CreateRecipe } from './componentes/CreateRecipe';
import {Landing} from './componentes/Landing'

import { useSelector } from 'react-redux';






function App() {
  const recetas = useSelector((state) => state.recetasTotales) //o state.recetas
 
  console.log(recetas)

  
  return (
    <div className="App">
   
      <Switch>
        <Route exact path="/home">                    
          <Home/>         
        </Route>
        <Route exact path="/">
          <Landing/>
        </Route>
         <Route exact path={`/recipes/:id`}>
          <Details/>
        </Route>        
        <Route exact path="/createrecipe">
          <CreateRecipe/>
        </Route>
      </Switch>
       
    </div>
  );
}

export default App;
