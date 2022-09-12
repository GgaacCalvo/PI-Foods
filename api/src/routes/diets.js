const { Router } = require('express');
const { Op, Recipes, Diets } = require('../db');

const router = Router();


router.get('/', async (req, res, next) => {
    const dietas = [
        'ovo vegetarian',
        'vegan',
        'pescetarian',
        'paleolithic',
        'primal',
        'low fodmap',
        'whole 30',
        'gluten free',
        'ketogenic',
        'vegetarian',
        'lacto vegetarian',
        'lacto ovo vegetarian'
    ];
    
    try {
        await dietas.forEach((diet) => {
            Diets.findOrCreate({
                where: {
                    name: diet
                }
            }) 
        })
        
        const allDiets = await Diets.findAll();
        console.log(allDiets)
        res.status(200).send(allDiets)
    } catch (error) {
        next(error)
    } 

});





module.exports = router;