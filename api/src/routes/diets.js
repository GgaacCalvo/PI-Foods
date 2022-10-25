const { Router } = require('express');
const { Op, Recipes, Diets } = require('../db');

const router = Router();


router.get('/', async (req, res, next) => {
    const dietas = [       
        'vegan',
        'pescetarian',
        'paleolithic',
        'primal',
        'low fodmap',
        'whole 30',
        'gluten free',
        'ketogenic',
        'vegetarian',        
        'lacto ovo vegetarian'
    ];
    
    try {
        dietas.forEach((diet) => {
            Diets.findOrCreate({
                where: {
                    name: diet
                }
            }) 
        })
        
        const allDiets = await Diets.findAll();
        
        res.status(200).send(allDiets)
    } catch (error) {
        next(error)
    } 

});





module.exports = router;