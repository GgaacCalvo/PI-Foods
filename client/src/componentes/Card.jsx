import "./Card.css"
export function Card({name, image, diets, healthScore}) {
    
    return ( 
        
    <div className="card">
        <div className="card-image">
            <img src={image} alt='imagen'/>
        </div>
        <div className="card-info">

            <h3 className="card-title">{name}</h3>
            <div className="diets-container">
                <div className="diet-container">

                    <span>Health Score: </span>
                    <span className="healthS">
                        { 
                        healthScore === 100 ? <p>★★★★★</p> :  
                        healthScore > 75 ? <p>★★★★</p> :
                        healthScore > 50 ? <p>★★★</p> : 
                        healthScore > 25 ? <p>★★</p> :
                        <p>★</p>
                        }
                        </span>                
                </div>
                <div className="diet-container">
                    {diets.map((d, index) => <li className="diet-li" key={index}> {d} </li>)}
                </div>
            </div>
        </div>
    </div>
    )
}