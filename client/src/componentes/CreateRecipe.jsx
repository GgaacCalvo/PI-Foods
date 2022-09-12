import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {postRecipe} from "../store/actions"
import "./CreateRecipe.css"
import { NavBar } from "./NavBar"


export function CreateRecipe() {
  
    let dispatch = useDispatch()
    const [name, setName] = useState('')
    const [summary, setSummary] = useState('')
    const [healthScore, setHealthScore] = useState(0)
    const [steps, setSteps] = useState('')
    const [image, setImage] = useState('')
    
    const dietsState = useSelector((state) => state.dietas)
    
    const diets = []
    function onSubmit(e) {
      e.preventDefault()
      if(!name) alert('Name is not empty')
      else if(!summary) alert('Your recipe needs a summary')      
      else if(!steps) alert('Your recipe needs a steps')
      else if (!healthScore || healthScore < 1 || healthScore > 100) {
        alert('Please insert a valid Health Score')}
      else {
        dispatch(postRecipe({name, image, summary, steps, healthScore, diets}))
        
        document.getElementById("form").reset();
      }


    }
    
    function addDiet(target){
       if(target.checked){
         diets.push(target.value)
       }
    }

    return (  
        <div className="container-create">
          <div className="navbar-title">
            <NavBar/>
            <h1 className="title-create">Create your recipe, show us!</h1>
          </div>
          <form id="form" onSubmit={onSubmit} className="form">
            <label>Name:
            <input 
              className="input-label" name="name" value={name} placeholder="name" onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>Summary:
            <input className="input-label" name="summary" value={summary} placeholder="Summary"  onChange={(e) => setSummary(e.target.value)}/>
            </label>
            <label>Health Score:
            <input className="input-label" name="healthScore" value={healthScore} placeholder="healthScore"  onChange={(e) => setHealthScore(e.target.value)}/>
            </label>            
            <label>Image:
            <input className="input-label" name="image" value={image} placeholder="Url image" onChange={(e) => setImage(e.target.value)}/>
            </label>           
            {
            <div className="diets-contain">
              <label>Select your types of diets</label>
              <div className="checkboxs">
                <label className="label-checkbox">
                <input  name="vegan" type="checkbox" value="vegan" onChange={(e) => addDiet(e.target)}/>
                  Vegan</label>
                <label className="label-checkbox">
                <input name="vegetarian" type="checkbox" value="vegetarian" onChange={(e) => addDiet(e.target)}/>
                  Vegetarian</label>
                <label className="label-checkbox">
                <input name="pescetarian" type="checkbox" value="pescetarian" onChange={(e) => addDiet(e.target)}/>
                  Pescetarian</label>
                <label className="label-checkbox">
                <input name="whole 30" type="checkbox" value="whole 30" onChange={(e) => addDiet(e.target)}/>
                  Whole 30</label>
                <label className="label-checkbox">
                <input name="paleolithic" type="checkbox" value="paleolithic" onChange={(e) => addDiet(e.target)}/>
                Paleolithic</label>
                <label className="label-checkbox">
                <input name="primal" type="checkbox" value="primal" onChange={(e) => addDiet(e.target)}/>
                  Primal</label>
                <label className="label-checkbox">
                <input name="low fodmap" type="checkbox" value="low fodmap" onChange={(e) => addDiet(e.target)}/>
                  Low Fodmap</label>
                <label className="label-checkbox">
                <input name="gluten free" type="checkbox" value="gluten free" onChange={(e) => addDiet(e.target)}/>
                  Gluten Free</label>
                <label className="label-checkbox">
                <input name="ketogenic" type="checkbox" value="ketogenic" onChange={(e) => addDiet(e.target)}/>
                  Ketogenic</label>
                <label className="label-checkbox">
                <input name="lacto vegetarian" type="checkbox" value="lacto vegetarian" onChange={(e) => addDiet(e.target)}/>
                  Lacto Vegetarian</label>
                <label className="label-checkbox">
                <input name="ovo vegetarian" type="checkbox" value="ovo vegetarian" onChange={(e) => addDiet(e.target)}/>
                  Ovo Vegetarian</label>
              </div> 
            </div>
              // dietsState && dietsState.map((diet) => {
              //   return(
              //     <div>

              //       <p id={diet} name={diet} >{diet}</p>
              //       <input name={diet} key={diet} type="checkbox" value={diet} onChange={(e) => addDiet(e.target)}/> 
              //     </div>
                    
              //   )
              // })
            }
            <label>Steps:
             </label>
            <textarea name="steps"  value={steps} placeholder="step by step"  onChange={(e) => setSteps(e.target.value)}/>
            <input className="create" type="submit" name="CREATE" value="CREATE"/>
        </form>
        </div>      
    )
}