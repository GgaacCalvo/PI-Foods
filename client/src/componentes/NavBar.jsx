import { Link } from "react-router-dom"
import home from "../imagenes/home.png"

export function NavBar() {
    
    return <div className="Nav">
        <Link to = "/home">
            <img src={home} width="60" height="60" alt='' className='casa'/>
        </Link>
    </div>
}