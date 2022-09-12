import {useState} from 'react'
import "./Search.css"
import { useDispatch } from 'react-redux';
import { getRecipesName } from '../store/actions';
import { useSelector } from 'react-redux';

export  function Search() {
    const [search, setSearch] = useState('');
    let dispatch = useDispatch();


const recipes = useSelector((state) => state.recipes)

    const onSubmit =  async (e) => {
        e.preventDefault()
        if(!search.trim()){
            return alert("Please insert a valid food name")
        } else {
            await dispatch(getRecipesName(search.trim())) 
            setSearch('')  
            
            
        }
    }
function onInputChange(e) {
    //e.preventDefault()
    setSearch(e.target.value)
}

    return <div>
        <form onSubmit={onSubmit}>
            <input className='input-search' type="text" placeholder="Search your recipe" onChange={onInputChange} value={search}/>
            <input className="btnSearch" type="submit" value="SEARCH"/>
        </form>
    </div>
}

