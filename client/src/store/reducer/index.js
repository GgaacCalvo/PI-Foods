import { GET_RECIPES, GET_RECIPESNAME, GET_DIETS, POST_RECIPE, GET_DETAIL, ORDER_BY_SCORE, ORDER_BY_NAME, FILTER_BY_DIET } from "../actions";


const initialState = {
    recetas: [],
    recetasTotales: [],
    detail: [],
    dietas: []
  }
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPES:
          return {
            ...state,
            
            recetasTotales: action.payload,
            recetas: action.payload
          }
          case GET_RECIPESNAME:
          return {
            ...state,
            
            recetas: action.payload
          }
          case GET_DIETS:
            return {
              ...state,
              dietas: action.payload
            }
          case POST_RECIPE:
            return {
              ...state
            }
          case GET_DETAIL:
            return {
              ...state,
              detail: action.payload
            }
          case FILTER_BY_DIET:
            const recetasTotales = state.recetas
            const dietasFiltradas = action.payload === "All" ? recetasTotales : recetasTotales.filter((receta) => receta.diets.includes(action.payload))
            return {
              ...state,
              recetas: dietasFiltradas
            }
          case ORDER_BY_NAME:
            if(action.payload === 'desc'){
              return {
                ...state,
                recetas: [...state.recetas].sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1))
              }
            } else {
              return {
                ...state,
                recetas: [...state.recetas].sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
              }
            }
          case ORDER_BY_SCORE:
            if (action.payload === 'low') {
              return {
                  ...state,
                  recetas: [...state.recetas].sort((a, b) => {
                      if (a.healthScore > b.healthScore) return 1;
                      if (a.healthScore < b.healthScore) return -1;
                      else return 0;
                  })
              }
          } else {
              return {
                  ...state,
                  recetas: [...state.recetas].sort((a, b) => {
                      if (a.healthScore < b.healthScore) return 1;
                      if (a.healthScore > b.healthScore) return -1;
                      else return 0;
                  })
              }
          };
        
          default:
            return state;
    }
  };
  
  export default reducer;