import { Link } from "react-router-dom"
import "./Landing.css"
import video from "../imagenes/landing.mp4" 
import home from ".././imagenes/home.png"

export function Landing(){
    
    return (
        <div className="fondo">
            <div className="video">

                <video id="video" loop autoPlay preload muted>
                    <source src={video} type='video/mp4' />
                </video>
            </div>
            
            <div className="start">
                <Link to="/home">     
                <img className="home-icon" src={home}/>
                {/* <h2 className="title-landing">Are you ready to cook?</h2>            */}
                    {/* <button className="button">Start!</button> */}
                </Link>
            </div>
        </div>
    )
        
}