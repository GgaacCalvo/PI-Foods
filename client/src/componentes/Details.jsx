import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipeDetail } from "../store/actions";
import "./Details.css"
import { Loading } from "./Loading";
import { NavBar } from "./NavBar";

export function Details(){
    let detalles = useSelector(state => state.detail)
    let {id} = useParams()
    
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRecipeDetail(id))
    }, [id, dispatch])
   
    let contenido = detalles.summary;
    let texto = '';
    if(contenido) {

        texto = contenido.replace(/<[^>]*>?/g, '');
    }
    return (
        
        <div className="detail-super">
            <div className="nav-detail">
              <NavBar/>
            </div>
        {
            detalles.length === 0 ?
            <Loading/>:
            <div className="detail-view">
                <div className="detail-container">
                    <div className="detail-1">
                        <h1>{detalles.name}</h1>
                    </div>
                    <div className="detail-info">
                        <div className="detail-2">
                            <div className="image-detail">           
                                <img src={detalles.image} alt='imagen'/>           
                            </div>
                            <label> DIETS: </label>
                            <span>{detalles.diets && detalles.diets.map(el => el + ", ")}</span>
                            <label> DISHTYPES: </label>
                            <span>{detalles.dishTypes && detalles.dishTypes.map(el => el + ", ")}</span>

                        </div>
                        <div className="detail-3">
                            <label> SUMMARY: </label>
                            
                            <p className="parrafo">{texto}</p>
                            <label> HEALTH SCORE: </label>
                            <span className="healthS">
                        { 
                        detalles.healthScore === 100 ? <p>★★★★★</p> :  
                        detalles.healthScore > 75 ? <p>★★★★</p> :
                        detalles.healthScore > 50 ? <p>★★★</p> : 
                        detalles.healthScore > 25 ? <p>★★</p> :
                        <p>★</p>
                        }
                        </span>
                            <label>STEPS: 
                            </label>
                                <p >{detalles.steps && detalles.steps.slice(" ")}</p>                       
                        </div>
                    </div>
                    
                </div>
            </div>
            }
        </div>
    )
}