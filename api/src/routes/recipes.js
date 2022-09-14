const { Router } = require('express');
const { Recipes, Diets, Op} = require('../db');
const axios = require('axios');
const { API_KEY } = process.env;





const router = Router();

const getInfoApiFood = async () => {

    const getApiRecetas = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
    const recetasApiInfo = getApiRecetas.data.results.map((e) => {
        
        return {
            id: e.id,
            name: e.title,
            image: e.image,
            dishTypes: e.dishTypes?.map((d) => d ),    
            diets: e.diets.map((d) => d),                                 
            summary: e.summary,
            healthScore: e.healthScore,
            steps: e.analyzedInstructions[0]?.steps?.map((s) => s.step),
        };
    });
    return recetasApiInfo;
};

const getInfoAPiDb = async () => {
    const infoDatabase = await Recipes.findAll({
        include: {
            model: Diets,
        }
    });
    const mapInfoDb = infoDatabase?.map((receta) => {
        return {
            id: receta.id,
            name: receta.name,
            image: receta.image,
            diets: receta.diets?.map((d) => d.name),
            dishTypes: receta.dishTypes?.map((d) => d.name),
            summary: receta.summary,
            healthScore: receta.healthScore,
            steps: receta.steps,
            createInDb: receta.createInDb,
        };
    });
    return mapInfoDb;
};

const getAllRecipeTotal = async () => {
    const infoApi = await getInfoApiFood();
    const infoDb = await getInfoAPiDb();
    const infoTotal = infoApi.concat(infoDb);
    //o infototal= [...infoapi, ...infodb]
    return infoTotal;
};

const filterItems = function(recipe, name) {
          return recipe.filter((e) => {
             return e.name.toLowerCase().includes(name.toLowerCase())             
        })
     }
     
router.get('/', async (req, res, next) => {
    const {name} = req.query;
    const recipesTotales = await getAllRecipeTotal();
    try {
        if(!name) {        
            res.send(recipesTotales)
            } else {
                const recipesName = filterItems(recipesTotales, name)
                console.log(recipesName)
                recipesName.length > 0 ? res.status(200).send(recipesName) : res.send(recipesTotales)
            }                
    } catch (err) {
        next(err)
    }
})


router.get('/:idReceta', async (req, res, next) => {
    
    const {idReceta} = req.params;
    const recipesTotales = await getAllRecipeTotal();
    
    try {
        if(idReceta) { 
                    
            let receta = recipesTotales.find(e => e.id == idReceta)           
            if(receta){
                res.status(200).json(receta) 
            } else {
                res.status(404).send({message: 'La receta no existe'})       
            }
        }
            
    } catch (error) {
        next(error)
    }
})
 
router.post('/', async (req, res, next) =>{ 
    const { name, image, steps, healthScore, diets, summary } = req.body;
    try {
        let newRecipe = await Recipes.create({                                //creo receta en BD
            name,
            image,
            summary,
            steps,
            healthScore,
        });

        let dietsDb = await Diets.findAll({
            where: {
                name: diets
            }
        })

        newRecipe.addDiets(dietsDb)


        res.status(200).send({message: 'La dieta fue creada correctamente'})
    } catch (error) {
        next(error)
    }
})

module.exports = router;