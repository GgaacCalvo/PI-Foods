import axios from 'axios';

export const GET_RECIPES = 'GET_RECIPES'
export const GET_RECIPESNAME = 'GET_RECIPESNAME'
export const GET_DIETS = 'GET_DIETS'
export const POST_RECIPE = 'POST_RECIPE'
export const GET_DETAIL = 'GET_DETAIL'
export const FILTER_BY_DIET = 'FILTER_BY_DIET'
export const ORDER_BY_NAME = 'ORDER_BY_NAME'
export const ORDER_BY_SCORE = 'ORDER_BY_SCORE'
export const CLEAN_DETAIL = 'CLEAN_DETAIL'

export function getRecipes() {
    return function(dispatch){
        axios.get('/api/recipes')
        .then((recipes) => {
            dispatch({
                type: GET_RECIPES,
                payload: recipes.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export function getRecipesName(search) {
    return function(dispatch){
        axios.get('/api/recipes?name=' + search)
        .then((recipes) => {
            dispatch({
                type: GET_RECIPESNAME,
                payload: recipes.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export function getDiets() {
    return function (dispatch) {
        axios.get('/api/diets')
        .then((diets) => {
            dispatch({
                type: GET_DIETS,
                payload: diets.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }    
}

 export function postRecipe(payload){
     return async function (dispatch) {
         const receta = await axios.post('/api/recipes', payload)
         dispatch({
             type: POST_RECIPE,
         })
         return receta;
     }
 }


export function getRecipeDetail(id) {
    return function (dispatch) { 
        axios.get(`/api/recipes/${id}`)
        .then(receta => 
            dispatch({
                type: GET_DETAIL,
                payload: receta.data
            })
        )
        .catch(err => {
            console.log(err)
        })
    }    
}

export function cleanDetail() {
    return {
        type: CLEAN_DETAIL
    }
}

export function filterRecipesByDiet(payload) {
    return {
      type: FILTER_BY_DIET,
      payload,
    }
}

export function orderByName(payload) {      
    return {
        type: ORDER_BY_NAME,
        payload,
    }
}

export function orderByScore(payload) {
    return {
        type: ORDER_BY_SCORE,
        payload,
    }
}



  


