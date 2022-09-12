import './App.css';
import { Route, Switch } from 'react-router-dom';
import {NavBar} from './componentes/NavBar';
import {Cards} from './componentes/Cards';
import {Search} from './componentes/Search';
import { Details } from './componentes/Details';
import { CreateRecipe } from './componentes/CreateRecipe';
import {Landing} from './componentes/Landing'
import { useState } from 'react';
import { match } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const recetas = useSelector((state) => state.recetasTotales) //o state.recetas
  // const [id, setId] = useState('')
  console.log(recetas)
  // function onChance(e) {
  //   e.preventdefault()

  // }
  // function onFilter(id) {
  //   let receta = recetas.find(r => r.results.id === id);
  //   console.log(receta)
  //   if(receta) {
  //       return receta;
  //   } else {
  //       return "716426";
  //   }
  // }
  
  return (
    <div className="App">
    
      <Switch>
        <Route exact path="/home">
                    
          <Cards/>         
        </Route>
        <Route exact path="/">
          <Landing/>
        </Route>
         <Route exact path={`/recipes/:id`}>
          <Details/>
        </Route> 
        {/* <Route
          exact path={`/recipes/:id`}
          render={({match}) => <Details
            id={onFilter(match.params.id)}           
          />}          
        />   */}
        {/* <Route
          exact path='/recipes/:id'
          render={() => <Details
            id={id}
            onChange={onChance}
            />}        
        /> */}
        <Route exact path="/createrecipe">
          <CreateRecipe/>
        </Route>
      </Switch>
       
{/* 
      
        <Route
          exact path='/recipes'
          render={() => <Cards
            
          />}
        />
        */}
    </div>
  );
}

export default App;
